import Router from "koa-router";
import axios from "./utils/axios";
import Province from "../dbs/models/province";

const router = new Router({
  prefix: "/geo"
});

const sign = "2284230";

router.get("/getPosition", async ctx => {
  const {
    status,
    data: { province, city }
  } = await axios.get(`http://117.51.155.165/geo/getPosition?sign=${sign}`);
  if (status === 200) {
    ctx.body = {
      province,
      city
    };
  } else {
    ctx.body = {
      province: "",
      city: ""
    };
  }
});

router.get("/province", async ctx => {
  // const province = await Province.find();
  // ctx.body = {
  //   province: province.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     };
  //   })
  // };
  const {
    status,
    data: { province }
  } = await axios.get(`http://117.51.155.165/geo/province?sign=${sign}`);
  ctx.body = {
    province: status === 200 ? province : []
  };
});

router.get("/province/:id", async ctx => {
  const {
    status,
    data: { city }
  } = await axios.get(
    `http://117.51.155.165/geo/province/${ctx.params.id}?sign=${sign}`
  );

  ctx.body = {
    city: status === 200 ? city : []
  };
});

router.get("/city", async ctx => {
  const {
    status,
    data: { city }
  } = await axios.get(`http://117.51.155.165/geo/city?sign=${sign}`);
  ctx.body = {
    city: status === 200 ? city : []
  };
});

router.get("/hotCity", async ctx => {
  const {
    status,
    data: { hots }
  } = await axios.get(`http://117.51.155.165/geo/hotCity?sign=${sign}`);
  ctx.body = {
    hots: status === 200 ? hots : []
  };
});

router.get("/menu", async ctx => {
  const {
    status,
    data: { menu }
  } = await axios.get(`http://117.51.155.165/geo/menu?sign=${sign}`);
  if (status === 200) {
    ctx.body = { menu };
  } else {
    ctx.body = { menu: [] };
  }
});

export default router;

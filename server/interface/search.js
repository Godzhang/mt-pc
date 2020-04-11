import Router from "koa-router";
import axios from "./utils/axios";
import Poi from "../dbs/models/poi";

const router = new Router({
  prefix: "/search"
});

const sign = "2284230";

// 关键词智能提示
router.get("/top", async ctx => {
  const {
    status,
    data: { top }
  } = await axios.get(`http://117.51.155.165/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  });
  ctx.body = {
    top: status === 200 ? top : []
  };
});

router.get("/hotPlace", async ctx => {
  let city = ctx.store ? ctx.store.geo.posotion.city : ctx.request.query.city;
  const {
    status,
    data: { result }
  } = await axios.get(`http://117.51.155.165/search/hotPlace`, {
    params: {
      sign,
      city
    }
  });
  ctx.body = {
    result: status === 200 ? result : []
  };
});

router.get("/resultsByKeywords", async ctx => {
  const { city, keyword } = ctx.query;
  const {
    status,
    data: { count, pois }
  } = await axios.get(`http://117.51.155.165/search/resultsByKeywords`, {
    params: {
      city,
      keyword
    }
  });
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  };
});

router.get("/products", async ctx => {
  let keyword = ctx.query.keyword || "旅游";
  let city = ctx.query.city || "北京";
  let {
    status,
    data: { product, more }
  } = await axios.get("http://117.51.155.165/search/products", {
    params: {
      keyword,
      city,
      sign
    }
  });
  if (status === 200) {
    ctx.body = {
      product,
      more: ctx.isAuthenticated() ? more : [],
      login: ctx.isAuthenticated()
    };
  } else {
    ctx.body = {
      product: {},
      more: ctx.isAuthenticated() ? more : [],
      login: ctx.isAuthenticated()
    };
  }
});

export default router;

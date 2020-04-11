import Router from "koa-router";
import axios from "./utils/axios";

const router = new Router({
  prefix: "/categroy"
});

const sign = "2284230";

router.get("/crumbs", async ctx => {
  const {
    status,
    data: { areas, types }
  } = await axios.get(`http://117.51.155.165/categroy/crumbs`, {
    params: {
      city: ctx.query.city.replace("市", "") || "北京",
      sign
    }
  });
  if (status === 200) {
    ctx.body = {
      areas,
      types
    };
  } else {
    ctx.body = {
      areas: [],
      types: []
    };
  }
});

export default router;

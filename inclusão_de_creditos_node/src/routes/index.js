import express from "express";
import credit from "./creditRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send("Página inicial")
  })

  app.use(
    express.json(),
    credit
  )
}

export default routes
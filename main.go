package main

import (
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.Index("public/index.html")
	e.Static("/static", "/")
	e.Run(":3000")
}

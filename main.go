package main

import (
	_ "embed"
	"log"
	"os"
	"path"

	"github.com/urfave/cli/v2"
	"github.com/webview/webview"
)

//go:embed scratch_init.js
var init_js string

func scratch_url_add(Url string) string {
	return path.Join(Url, "embed")
}

func game_main(Url string) {
	Url = scratch_url_add(Url)
	debug := false
	w := webview.New(debug)
	defer w.Destroy()
	w.SetTitle(Window_title)
	w.SetSize(default_size_w, default_size_h, webview.HintNone)

	w.Navigate(Url)

	w.Init(init_js)
	w.Run()
}

func main() {
	app := &cli.App{
		Action: func(c *cli.Context) error {
			if c.Args().Len() >= 1 {
				game_main(c.Args().Get(0))
			}
			return nil
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}

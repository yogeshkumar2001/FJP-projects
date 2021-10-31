package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"strings"
	"fyne.io/fyne/v2"
	// "fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	// "fyne.io/fyne/v2/widget"
	"fyne.io/fyne/v2/canvas"
	// "fyne.io/fyne/v2/theme"

)

func showGallery(w fyne.Window) {
	// a := app.New()
	w.Resize(fyne.NewSize(1000 , 400))
	root_src :="C:\\Users\\Yk959\\OneDrive\\Pictures";
	
	files ,err := ioutil.ReadDir(root_src);
	if  err !=nil{
		log.Fatal(err)
	}
	tabs := container.NewAppTabs()
	
	for _,file := range files {
		fmt.Println(file.Name() , file.IsDir());
		if file.IsDir() == false {
			extension := strings.Split(file.Name() , ".")[1];
			if extension == "png" || extension == "jpg" {
               image := canvas.NewImageFromFile(root_src+ "\\" +file.Name());
			   image.FillMode = canvas.ImageFillOriginal
			   tabs.Append(container.NewTabItem(file.Name(),image))

			}
		}
	}

    tabs.SetTabLocation(container.TabLocationLeading);

	w.SetContent(container.NewBorder(panelContent,nil, nil, nil , tabs),)
	w.Show()
}
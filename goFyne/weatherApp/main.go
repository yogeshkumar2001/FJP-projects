package main

import (
	"fmt"
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/canvas"
	// "fyne.io/fyne/v2/widget"
	"io/ioutil"
	"net/http"
	"encoding/json"
	"image/color"
)


func main() {
	a := app.New()
	w := a.NewWindow("Weather App")

	w.Resize(fyne.NewSize(300, 300));

	res,err := http.Get("https://api.openweathermap.org/data/2.5/weather?q=noida&APPID=d3c1547e8c2c82eb3c8bb287d6c71cfc") 
    
	
	if err != nil{
		fmt.Println(err);
	}

	defer res.Body.Close();

	body , err := ioutil.ReadAll(res.Body); 
	if err != nil{
		fmt.Println(err);
	}

   weather , err := UnmarshalWelcome(body);
   if err != nil{
	fmt.Println(err);
   }
   
   img := canvas.NewImageFromFile("weather.jpg");
   img.FillMode = canvas.ImageFillOriginal;
   label1 := canvas.NewText("Weather Details" , color.White)
   label1.TextStyle= fyne.TextStyle{Bold:true}
   lable2 := canvas.NewText(fmt.Sprintf("Country %s"  , weather.Sys.Country) , color.White)
   lable3 := canvas.NewText(fmt.Sprintf("wind Speed %.2f"  , weather.Wind.Speed) , color.White)
   lable4 := canvas.NewText(fmt.Sprintf("Temp %2.fs"  , weather.Main.Temp) , color.White)
   lable5 := canvas.NewText(fmt.Sprintf("Humidity %2.f"  , weather.Main.Humidity) , color.White)
  

   w.SetContent(
	   container.NewVBox(
		   label1,
		   img,
		   lable2,
		   lable3,
		   lable4,
		   lable5,
	   ),
   )



	w.ShowAndRun()
}

// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    welcome, err := UnmarshalWelcome(bytes)
//    bytes, err = welcome.Marshal()


func UnmarshalWelcome(data []byte) (Welcome, error) {
	var r Welcome
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Welcome) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Welcome struct {
	Coord      Coord     `json:"coord"`     
	Weather    []Weather `json:"weather"`   
	Base       string    `json:"base"`      
	Main       Main      `json:"main"`      
	Visibility int64     `json:"visibility"`
	Wind       Wind      `json:"wind"`      
	Clouds     Clouds    `json:"clouds"`    
	Dt         int64     `json:"dt"`        
	Sys        Sys       `json:"sys"`       
	Timezone   int64     `json:"timezone"`  
	ID         int64     `json:"id"`        
	Name       string    `json:"name"`      
	Cod        int64     `json:"cod"`       
}

type Clouds struct {
	All int64 `json:"all"`
}

type Coord struct {
	Lon float64 `json:"lon"`
	Lat float64 `json:"lat"`
}

type Main struct {
	Temp      float64 `json:"temp"`      
	FeelsLike float64 `json:"feels_like"`
	TempMin   float64 `json:"temp_min"`  
	TempMax   float64 `json:"temp_max"`  
	Pressure  int64   `json:"pressure"`  
	Humidity  int64   `json:"humidity"`  
	SeaLevel  int64   `json:"sea_level"` 
	GrndLevel int64   `json:"grnd_level"`
}

type Sys struct {
	Type    int64  `json:"type"`   
	ID      int64  `json:"id"`     
	Country string `json:"country"`
	Sunrise int64  `json:"sunrise"`
	Sunset  int64  `json:"sunset"` 
}

type Weather struct {
	ID          int64  `json:"id"`         
	Main        string `json:"main"`       
	Description string `json:"description"`
	Icon        string `json:"icon"`       
}

type Wind struct {
	Speed float64 `json:"speed"`
	Deg   int64   `json:"deg"`  
	Gust  float64 `json:"gust"` 
}

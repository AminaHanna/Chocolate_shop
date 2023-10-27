import { useState } from "react";


function Search(){
    const [foodSearch, setfoodSearch] = useState(" ")


    let chocolates=[
        {
            choco_img:<img className="img_" src="https://media.istockphoto.com/id/488182109/photo/chocolates.jpg?s=612x612&w=0&k=20&c=OAzD-G8GZZfzb5bgZ5CJd_PdSIJqdnInLmEeeiDGRe0="/>,
            choco_name:"Mixed Chocolates",
            
        },
        {
            choco_img:<img className="img_" src="https://www.lindt.co.uk/media/wysiwyg/_toile-aux-Noisettes-650x480.jpg"/>,
            choco_name:"Lindt",
            
        },
        {
            choco_img:<img className="img_" src="https://e0.pxfuel.com/wallpapers/126/998/desktop-wallpaper-all-ice-cream-cake.jpg"/>,
            choco_name:"Ice cream Cake",
            
        },
        {
            choco_img:<img className="img_" src="https://w0.peakpx.com/wallpaper/761/8/HD-wallpaper-cake-with-chocolate-cream-fruit-cheesecake-berries-sweets-cakes.jpg"/>,
            choco_name:"Chocolate Cake",
            
        },
        {
            choco_img:<img className="img_" src="https://c1.wallpaperflare.com/preview/126/495/610/chocolate-cake-dessert-plate-icing.jpg"/>,
            choco_name:"Chocolate Cake",
            
        },
        {
            choco_img:<img className="img_" src="https://media.istockphoto.com/id/1024937274/photo/sweet-homemade-chocolate-and-vanilla-cake-pops.jpg?s=612x612&w=0&k=20&c=lAtNL_Bxs2q2IXvUbtHT879jnqqNZ4BX8AkTvz7EclU="/>,
            choco_name:"Cake Pops",
           
        },
        {
            choco_img:<img className="img_" src="https://assets.winni.in/product/primary/2014/8/43405.jpeg?dpr=1&w=500"/>,
            choco_name:"Ferrero Rocher",
           
        },
        {
            choco_img:<img className="img_" src="https://media.istockphoto.com/id/172895762/photo/chocolate-covered-strawberries-with-white-chocolate-drizzle.webp?b=1&s=170667a&w=0&k=20&c=w8SDoNd7lrHBju_jJqV7-CR6SuO8_Ivlq2KvG1khUuY="/>,
            choco_name:"Strawberry Choco",
            
        },
        {
            choco_img:<img className="img_" src="https://t3.ftcdn.net/jpg/05/98/72/36/360_F_598723631_ZspcQXuQmFiI0QfrKEHditwbcJ9D2NiG.jpg"/>,
            choco_name:"Brownie",
           
        },
        {
            choco_img:<img className="img_" src="https://cdn.pixabay.com/photo/2015/03/26/23/09/cake-pops-693645_1280.jpg"/>,
            choco_name:"Cake Pops",
            gram:"",
            rate:""
        },
        {
            choco_img:<img className="img_" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/21234f133845249.Y3JvcCwxMDM2LDgxMCw4OSw2MDU.jpg"/>,
            choco_name:"Lindt",
           
        },
        {
            choco_img:<img className="img_" src="https://img.freepik.com/premium-photo/bowl-ice-cream-with-chocolate-sauce-chocolate-sauce_823696-1265.jpg"/>,
            choco_name:"Ice cream Cake",
            
        },
        {
            choco_img:<img className="img_" src="https://img.freepik.com/premium-photo/bowl-chocolate-ice-cream-with-word-chocolate-it_902338-17546.jpg"/>,
            choco_name:"Ice cream Cake",
            
        },
        {
            choco_img:<img className="img_" src="https://i.pinimg.com/736x/04/bf/47/04bf476811d92188fff13042975da699.jpg"/>,
            choco_name:"Chocolate Cake",
            gram:"",
            rate:""
        },
        {
            choco_img:<img className="img_" src="https://c4.wallpaperflare.com/wallpaper/225/83/799/brownie-4k-best-computer-wallpaper-preview.jpg"/>,
            choco_name:"Brownie",
            
        },
        {
            choco_img:<img className="img_" src="https://media.istockphoto.com/id/1361902909/photo/strawberry-deep.webp?b=1&s=170667a&w=0&k=20&c=_yM8qqGCf2djG5ghByvLVDzO4un_lOXFIr5HazXQ63w="/>,
            choco_name:"Strawberry Choco",
           
        },
        {
            choco_img:<img className="img_" src="https://img.freepik.com/fotos-premium/trozo-pastel-chocolate-plato_662214-170846.jpg"/>,
            choco_name:"Chocolate Cake",
            
        },
        {
            choco_img:<img className="img_" src="https://img.freepik.com/fotos-premium/trozo-pastel-chocolate-bayas-plato_662214-129732.jpg"/>,
            choco_name:"Chocolate Cake",
            
        },
        {
            choco_img:<img className="img_" src="https://www.devonhampers.com/image_resize/crop/mw1500/mh750/products/1765/shutterstock_1180337917.jpg"/>,
            choco_name:"Brownie",
            
        },
        {
            choco_img:<img className="img_" src="https://www.thankufoods.com/cdn/shop/products/TF_0007_IABTHANKUDAY29743.jpg?v=1674459576&width=2048"/>,
            choco_name:"Ferrero Rocher",
            
        },
    ]


    const SearchFoodtxt = (event)=>{
        const foodSearch = event.target.value
        console.log(foodSearch)
        setfoodSearch(foodSearch)
      }
      let result =  chocolates.filter((chocolates)=>{
        if(chocolates.choco_name === foodSearch){
          return true
        }
          
        })

    return(
        <>
 
        {/* to search the items */}


    <div className='divv'>
    <i class="fa-solid fa-magnifying-glass"></i>
      <input className="searchh" type='text' placeholder='Search' onChange={SearchFoodtxt}/>
    </div>

<div className="main_choco">
        {result.map((item) => {
            return(
                <>
                <div className="choco_res">
                    <div className="images">
                        {item.choco_img}
                    </div>
                    <div className="names">
                        <h2>{item.choco_name}</h2>
                    </div>
                </div>
            </>
          )
        })}
</div>

{/* to show all the items */}
<div className="main_choco" style={{justifyContent:"center"}}>

{chocolates.map((item) => {
            return(
                <>
                <div className="choco">
                    <div className="images">
                        {item.choco_img}
                    </div>
                    <div className="names">
                        <h2>{item.choco_name}</h2>
                    </div>
                </div>

            </>
          )
        })}
</div>
        </>
    )
}
export default Search
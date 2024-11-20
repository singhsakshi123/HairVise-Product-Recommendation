const Product = require("../models/product")

module.exports.addProduct = async (req, res) => {
    const response = {
        success: false,
        message: "",
        errMessage: "",
        data: "",
    };
    const products = [
        {
            "id": 1,
            "name": " Biotin Gummies",
            "price": 200,
            "image": "https://drive.google.com/file/d/1yLJk0sfAc6bFDPY2lAKd0A7zV_AEJYu_/view?usp=drive_link",
            "description": "These delicious gummies are packed with Biotin, an essential C vitamin that nourishes hair follicles from within. Biotin helps support healthy hair growth and may improve hair strength.",
            "quantity": "30"
        },
        {
            "id": 2,
            "name": " Hair Growth Serum",
            "price": 250,
            "image": "https://drive.google.com/file/d/1-uOi1XzI1CuHZZAgQ-SmlxFM-8RBrEJK/view?usp=drive_link",
            "description": "This invigorating serum is formulated with stimulating ingredients that help revitalize the scalp and create a favorable environment for stronger, thicker hair.",
            "quantity": "30"
        },
        {
            "id": 3,
            "name": " Hair Growth Package",
            "price": 400,
            "image": "https://drive.google.com/file/d/1_MwZmWKIKJ2olswX7PMdBOQ2OFqLhcTc/view?usp=drive_link",
            "description": "Grow stronger, healthier hair! This Hair Growth Package combines Biotin Gummies for internal nourishment and Hair Growth Serum to stimulate the scalp, promoting thicker, fuller hair.",
            "quantity": "30"
        },
        {
            "id": 4,
            "name": " Tea Tree Extract Shampoo",
            "price": 200,
            "image": "https://drive.google.com/file/d/1G4Vu4V0rM_m_XnNpy5hBZYm2KE-XfOhm/view?usp=drive_link",
            "description": "This invigorating formula tackles dandruff and soothes itchiness with its natural antifungal and antibacterial properties. It also helps balance scalp oil production, leaving your hair feeling refreshed and healthy.",
            "quantity": "30"
        },
        {
            "id": 5,
            "name": " Nizoral Anti-Dandruff Shampoo",
            "price": 300,
            "image": "https://drive.google.com/file/d/13K2bDW21rw0PWcqLpr4VEoCJEdoiADWt/view?usp=drive_link",
            "description": "Clinically proven relief from dandruff! Nizoral Anti-Dandruff Shampoo with Ketoconazole tackles the root cause of dandruff to control flaking, scaling, and itching.",
            "quantity": "30"
        },
        {
            "id": 6,
            "name": "Ketoconazole Anti-Dandruff Shampoo",
            "price": 200,
            "image": "https://drive.google.com/file/d/1IHqIutHX51eXrKnEhHc8MjNtBwvU5_V4/view?usp=drive_link",
            "description": "Target dandruff effectively with Ketoconazole Anti-Dandruff Shampoo. This medicated shampoo relieves flaking, itching, and irritation caused by dandruff.",
            "quantity": "30"
        },
        {
            "id": 7,
            "name": " T/Gel Therapeutic Shampoo",
            "price": 200,
            "image": "https://drive.google.com/file/d/1x4do_Ps1ZV2tCKNaIr2_zD5zDntDSjfk/view?usp=drive_link",
            "description": "Soothe and relieve your scalp with T/Gel Therapeutic Shampoo. It calms itching and irritation associated with dandruff, psoriasis, and seborrheic dermatitis.",
            "quantity": "30"
        },
        {
            "id": 8,
            "name": " Pro-V color Shampoo",
            "price": 200,
            "image": "https://drive.google.com/file/d/1qZmX2n9ge1Rnb2xUptFnGgOO_6tikT5-/view?usp=drive_link",
            "description": "Vibrant color, lasting shine.  Pro-V Color Shampoo gently cleanses hair while helping to lock in color for long-lasting vibrancy.",
            "quantity": "30"
        },
        {
            "id": 9,
            "name": "Keratin Smooth Deep Mask",
            "price": 200,
            "image": "https://drive.google.com/file/d/1doHrRR2sz9YRPNgEdwomwGtO67VT4WOq/view?usp=drive_link",
            "description": "Transform frizzy hair into smoother, manageable strands.  This deep conditioning mask with Keratin tames frizz and boosts shine for hair that's noticeably sleek and healthy.",
            "quantity": "30"
        },
        {
            "id": 10,
            "name": " Pure Black Sesame Oil",
            "price": 200,
            "image": "https://drive.google.com/file/d/1RstBmaRTr7vwaKnb6LMoyMLE8eb-b_7U/view?usp=drive_link",
            "description": "Nourish and strengthen your hair with Pure Black Sesame Oil. Rich in vitamins and minerals, this natural oil helps promote hair growth, adds shine, and soothes dry scalp.",
            "quantity": "30"
        },
        {
            "id": 11,
            "name": " Argan Oil",
            "price": 200,
            "image": "https://drive.google.com/file/d/11LjV-ITEeQ01IkNv1XzqpHE7NdXymfjL/view?usp=drive_link",
            "description": "Unlock the secrets of luxurious hair with Argan Oil.  This versatile oil, rich in antioxidants and vitamin E,  moisturizes dry hair, tames frizz, and adds shine for a healthy look.",
            "quantity": "30"
        },
        {
            "id": 12,
            "name": "Organic Temporary Hair Color-Burgundy",
            "price": 200,
            "image": "https://drive.google.com/file/d/1vwghFlFG9MkZD0V7T91IMsvXJ_uXOkv_/view?usp=drive_link",
            "description": "Try a vibrant new look without commitment! Our Organic Temporary Hair Color in Burgundy deposits rich color with plant-based ingredients that wash out after a few shampoos. It's a fun way to experiment with a bold shade without damaging your hair.",
            "quantity": "30"
        },
        {
            "id": 13,
            "name": " Organic Temporary Hair Color-Brown",
            "price": 200,
            "image": "https://drive.google.com/file/d/1y1fZrCyg96xmpkH8Xlo2F084QHlgtnjM/view?usp=drive_link",
            "description": "Try a new brown hue without commitment! Our gentle, organic formula deposits temporary color for a fun and easy way to experiment with brown shades.",
            "quantity": "30"
        },
        {
            "id": 14,
            "name": " Organic Temporary Hair Color-Blonde",
            "price": 200,
            "image": "https://drive.google.com/file/d/1IJOk30VUcxSFXIkazbs8SnpeSb8BoiJs/view?usp=drive_link",
            "description": "Fun, flirty blonde highlights without commitment!  This organic temporary hair color adds blonde highlights while being gentle on your hair.",
            "quantity": "30"
        },
        {
            "id": 15,
            "name": " Organic Temporary Hair Color-Black",
            "price": 200,
            "image": "https://drive.google.com/file/d/1JcVvdlkx5xeA-wAsjrQpMugIynbvjFbX/view?usp=drive_link",
            "description": "Try on a bold new black hue without commitment!  This temporary, organic formula deposits color on your hair without damaging it.  Perfect for a quick change or to experiment with black hair.",
            "quantity": "30"
        },
        {
            "id": 16,
            "name": " Hair Extension-Pink",
            "price": 200,
            "image": "https://drive.google.com/file/d/1uhJbPCYvEOKRKotSBIlKzNCbvzX06Y4O/view?usp=drive_link",
            "description": "Pink it up! Get instant length, volume & vibrant color with our Pink Hair Extensions.  ",
            "quantity": "30"
        },
        {
            "id": 17,
            "name": " Hair Extension-Blush",
            "price": 200,
            "image": "https://drive.google.com/file/d/1EPxlYf3CTnz2NNOUBjiAILpq9-tphIwl/view?usp=drive_link",
            "description": "Blush with these Extensions!  These extensions add instant length, volume, and a trendy touch without commitment.",
            "quantity": "30"
        },
        {
            "id": 18,
            "name": " Hair Extension-Blue",
            "price": 200,
            "image": "https://drive.google.com/file/d/1hQjc7CgrhP-RSIcLbiAsw14aBxnFQm1q/view?usp=drive_link",
            "description": "Rock bold blue! Get instant length, volume & vibrant color with our Blue Hair Extensions. ",
            "quantity": "30"
        },
        {
            "id": 19,
            "name": " Hair Extension-Red",
            "price": 200,
            "image": "https://drive.google.com/file/d/1SyOjCMKfsZ4ClzhgSo_0EgkyRktCotsq/view?usp=drive_link",
            "description": "Fiery & fabulous! Add instant length, volume, and a bold pop of red with our Red Hair Extensions.",
            "quantity": "30"
        },
        {
            "id": 20,
            "name": " Hair Topper",
            "price": 200,
            "image": "https://drive.google.com/file/d/1xXQCN8c3LNWwORQcc438PSmXXlZnlQ0p/view?usp=drive_link",
            "description": "Add volume & conceal thinning hair for a natural look with our Hair Topper.  Blends with your own hair for a confident boost.",
            "quantity": "30"
        },
        {
            "id": 21,
            "name": " Clip-On Pony Tail",
            "price": 200,
            "image": "https://drive.google.com/file/d/1RW2OettlRYbXn4SlnTD9-XvWkX36XEmu/view?usp=drive_link",
            "description": "Create stylish ponytails in seconds!  This clip-on ponytail adds instant length, volume, and creates a polished ponytail style without commitment.",
            "quantity": "30"
        },
        {
            "id": 22,
            "name": " Donut Scrunchies- Black",
            "price": 200,
            "image": "https://drive.google.com/file/d/16gGHDvEANRPxXyNzKb-u6s7AR3PAsx4h/view?usp=drive_link",
            "description": "Effortless buns & instant volume!  Hair Donut Scrunchies create perfect buns for easy updos and a fuller look.",
            "quantity": "30"
        },
        {
            "id": 23,
            "name": " Clip-On bangs",
            "price": 200,
            "image": "https://drive.google.com/file/d/1NJVeRBKQNGrEcKjd6naOgdY9APfh0zgC/view?usp=drive_link",
            "description": "Change your look in seconds! Clip-in bangs add instant fringe for a trendy style without commitment.",
            "quantity": "30"
        },
        {
            "id": 24,
            "name": " Side Hair Extention",
            "price": 200,
            "image": "https://drive.google.com/file/d/1Qk6umzmVzNCuAsOgHmyxebYAkZuAoM0B/view?usp=drive_link",
            "description": "Add instant volume and fullness to your hair with our Side Hair Extensions. Perfect for creating natural-looking styles with a touch more volume on the sides.",
            "quantity": "30"
        }
    
    ];
    try {
        const { name, price, quantity } = req.body;
        console.log(req.body);
        let image;
        if (req.file) {
            image = process.env.URL + "/images/" + req.file.filename;
          } else {
            response.message = "Set Post Image";
            return res.status(200).json(response);
          }
        const product = new Product({
            name,
            price,
            quantity,
            image,
        });
        const savedProduct = await product.save();
        response.success = true;
        response.message = "Product added successfully";
        response.data = savedProduct;
        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        response.errMessage = "Error adding product";
        return res.status(500).json(response);
    }
}

module.exports.getProducts = async (req, res) => {
    const response = {
        success: false,
        message: "",
        errMessage: "",
        data: "",
    };
    try {
        const products = await Product.find();
        console.log(products);
        response.success = true;
        response.message = "Products fetched successfully";
        response.data = products;
        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        response.errMessage = "Error fetching products";
        return res.status(500).json(response);
    }
}
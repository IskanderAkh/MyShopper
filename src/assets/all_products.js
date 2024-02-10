import p1_img from "./img/item1.png"
import p2_img from "./img/item2.png"
import p3_img from "./img/item3.png"
import p4_img from "./img/item4.jpg"
import pink_bikini from "/pink.jpg"
import red_bikini from "/red.png"
import navy from "/navy.png"
import heart from '/heart.png'
import pinkombre from '/pinkombre.jpg'
import multipleh from "/multiple.jpg"
import oatmeal from "/oatmeal.jpg"
import Floral from "/floral.png"
import redflower from "/redflower.png"

let products = [
    {
        name: 'Vintage T-Shirt for Women',
        price: 10,
        old_price: 190,
        sizes: ['S', 'M', 'L', 'XL'],
        link: 'Футболка-USA',
        colors: ['navy', 'gray', 'pink', 'wishbone'],
        id: 1,
        category: 'newcollection',
        filter: 'Футболки ',
        img: 'https://oldnavy.gap.com/webcontent/0054/667/953/cn54667953.jpg',

        imgProduct: {
            pink: ['https://oldnavy.gap.com/webcontent/0054/667/972/cn54667972.jpg', "https://oldnavy.gap.com/webcontent/0054/664/293/cn54664293.jpg"],
            navy: ["https://oldnavy.gap.com/webcontent/0054/699/645/cn54699645.jpg", "https://oldnavy.gap.com/webcontent/0054/617/052/cn54617052.jpg"],
            gray: ["https://oldnavy.gap.com/webcontent/0054/605/271/cn54605271.jpg", "https://oldnavy.gap.com/webcontent/0054/488/646/cn54488646.jpg"],
            wishbone: ["https://oldnavy.gap.com/webcontent/0054/627/315/cn54627315.jpg", "https://oldnavy.gap.com/webcontent/0054/627/476/cn54627476.jpg", "https://oldnavy.gap.com/webcontent/0054/627/491/cn54627491.jpg"]
        },
        colorImg: [`${navy}`],
        availability: true,
        page: 1,
    },
    {
        name: 'Glowing Waters Bikini',
        price: 7,
        sizes: ['S', 'M', 'L', 'XL'],
        link: 'Купальник-Glow',
        colors: ['pink', 'red'],
        id: 2,
        filter: 'Бикини ',
        category: 'newcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/625/444/cn54625444.jpg",
        imgProduct: {
            pink: ['https://oldnavy.gap.com/webcontent/0054/625/444/cn54625444.jpg', "https://oldnavy.gap.com/webcontent/0054/625/333/cn54625333.jpg"],
            red: ["https://oldnavy.gap.com/webcontent/0054/677/081/cn54677081.jpg", "https://oldnavy.gap.com/webcontent/0054/677/177/cn54677177.jpg"],

        },
        colorImg: [`${pink_bikini}`, `${red_bikini}`],
        availability: true,
        page: 1,
    },
    {
        name: 'Sweet Shot Sweater',
        price: 34,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['BigHeart', 'Pink', 'Red&Hearts', 'NavyStripes'],
        link: 'Свитшот-Sweet-Shot',
        id: 3,
        filter: 'Свитеры ',
        category: 'newcollection',
        img: 'https://oldnavy.gap.com/webcontent/0054/451/005/cn54451005.jpg',
        imgProduct: {
            BigHeart: ['https://oldnavy.gap.com/webcontent/0054/451/005/cn54451005.jpg', "https://oldnavy.gap.com/webcontent/0054/451/190/cn54451190.jpg", "https://oldnavy.gap.com/webcontent/0054/451/184/cn54451184.jpg", "https://oldnavy.gap.com/webcontent/0054/132/885/cn54132885.jpg"],
            Pink: ['https://oldnavy.gap.com/webcontent/0054/451/105/cn54451105.jpg', "https://oldnavy.gap.com/webcontent/0054/451/077/cn54451077.jpg", "https://oldnavy.gap.com/webcontent/0054/451/091/cn54451091.jpg", "https://oldnavy.gap.com/webcontent/0054/124/012/cn54124012.jpg"],
            'Red&Hearts': ["https://oldnavy.gap.com/webcontent/0054/298/048/cn54298048.jpg", "https://oldnavy.gap.com/webcontent/0054/298/142/cn54298142.jpg", "https://oldnavy.gap.com/webcontent/0054/298/156/cn54298156.jpg", "https://oldnavy.gap.com/webcontent/0054/132/067/cn54132067.jpg"],
            NavyStripes: ["https://oldnavy.gap.com/webcontent/0054/298/210/cn54298210.jpg", "https://oldnavy.gap.com/webcontent/0054/298/263/cn54298263.jpg", "https://oldnavy.gap.com/webcontent/0054/298/267/cn54298267.jpg", "https://oldnavy.gap.com/webcontent/0054/132/065/cn54132065.jpg"]
        },
        colorImg: [`${heart}`, `${pinkombre}`, multipleh, navy],
        availability: true,
        page: 1,
    },
    {
        name: 'Snug Cropped T-Shirt for Women',
        price: 24,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['cashblue', 'gray', 'red', 'yellow'],
        link: 'T-Shirt-Casual',
        id: 4,
        filter: 'Футболки ',
        category: 'lastcollection',
        img: 'https://oldnavy.gap.com/webcontent/0054/651/563/cn54651563.jpg',
        imgProduct: {
            cashblue: ['https://oldnavy.gap.com/webcontent/0054/651/586/cn54651586.jpg', "https://oldnavy.gap.com/webcontent/0054/650/965/cn54650965.jpg", "https://oldnavy.gap.com/webcontent/0054/488/647/cn54488647.jpg"],
            red: ["https://oldnavy.gap.com/webcontent/0054/578/908/cn54578908.jpg", "https://oldnavy.gap.com/webcontent/0054/694/357/cn54694357.jpg", "https://oldnavy.gap.com/webcontent/0054/488/509/cn54488509.jpg"],
            gray: ["https://oldnavy.gap.com/webcontent/0053/917/899/cn53917899.jpg", "https://oldnavy.gap.com/webcontent/0053/918/226/cn53918226.jpg", "https://oldnavy.gap.com/webcontent/0053/721/945/cn53721945.jpg", "https://oldnavy.gap.com/webcontent/0053/827/603/cn53827603.jpg"],
            yellow: ["https://oldnavy.gap.com/webcontent/0054/578/985/cn54578985.jpg", "https://oldnavy.gap.com/webcontent/0054/635/400/cn54635400.jpg", "https://oldnavy.gap.com/webcontent/0054/488/651/cn54488651.jpg"]
        },
        colorImg: [``],
        availability: true,
        page: 1,
    },
    {
        name: 'Summer Black Ripped Jeans Shorts',
        price: 26,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['darkgreen', 'gray', 'blue'],
        link: 'Summer-Shorts',
        id: 5,
        filter: 'Шорты ',
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0050/245/627/cn50245627.jpg",
        imgProduct: {
            darkgreen: ['https://oldnavy.gap.com/webcontent/0050/245/627/cn50245627.jpg', "https://oldnavy.gap.com/webcontent/0050/190/831/cn50190831.jpg", "https://oldnavy.gap.com/webcontent/0028/311/728/cn28311728.jpg"],
            gray: ["https://oldnavy.gap.com/webcontent/0053/130/027/cn53130027.jpg", "https://oldnavy.gap.com/webcontent/0053/130/021/cn53130021.jpg", "https://oldnavy.gap.com/webcontent/0052/715/142/cn52715142.jpg", "https://oldnavy.gap.com/webcontent/0052/406/077/cn52406077.jpg"],
            blue: ["https://oldnavy.gap.com/webcontent/0050/231/313/cn50231313.jpg", "https://oldnavy.gap.com/webcontent/0052/251/273/cn52251273.jpg", "https://oldnavy.gap.com/webcontent/0050/045/920/cn50045920.jpg", "https://oldnavy.gap.com/webcontent/0050/026/783/cn50026783.jpg"],

        },
        colorImg: [``],
        availability: true,
        page: 1,
    },
    {
        name: 'Quilted Puffer Jacket',
        price: 120,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'pink', 'brown', 'white'],
        link: 'Summer-Shorts',
        id: 6,
        filter: 'Куртки ',
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0053/977/037/cn53977037.jpg",
        imgProduct: "https://oldnavy.gap.com/webcontent/0053/977/047/cn53977047.jpg",
        imgProduct: {
            black: ['https://oldnavy.gap.com/webcontent/0053/977/047/cn53977047.jpg', "https://oldnavy.gap.com/webcontent/0053/977/040/cn53977040.jpg", "https://oldnavy.gap.com/webcontent/0053/977/054/cn53977054.jpg", "https://oldnavy.gap.com/webcontent/0053/977/064/cn53977064.jpg"],
            pink: ['https://oldnavy.gap.com/webcontent/0054/003/022/cn54003022.jpg', "https://oldnavy.gap.com/webcontent/0054/002/947/cn54002947.jpg", "https://oldnavy.gap.com/webcontent/0054/431/513/cn54431513.jpg", "https://oldnavy.gap.com/webcontent/0054/002/953/cn54002953.jpg"],
            'Red&Hearts': ["https://oldnavy.gap.com/webcontent/0054/298/048/cn54298048.jpg", "https://oldnavy.gap.com/webcontent/0054/298/142/cn54298142.jpg", "https://oldnavy.gap.com/webcontent/0054/298/156/cn54298156.jpg", "https://oldnavy.gap.com/webcontent/0054/132/067/cn54132067.jpg"],
            brown: ["https://oldnavy.gap.com/webcontent/0054/000/025/cn54000025.jpg", "https://oldnavy.gap.com/webcontent/0054/000/070/cn54000070.jpg", "https://oldnavy.gap.com/webcontent/0054/000/083/cn54000083.jpg", "https://oldnavy.gap.com/webcontent/0054/000/085/cn54000085.jpg"],
            white:["https://oldnavy.gap.com/webcontent/0053/976/928/cn53976928.jpg","https://oldnavy.gap.com/webcontent/0053/976/938/cn53976938.jpg","https://oldnavy.gap.com/webcontent/0053/976/953/cn53976953.jpg","https://oldnavy.gap.com/webcontent/0053/977/065/cn53977065.jpg"],
        },
        colorImg: [``],
        availability: true,
        page: 1,
    },
    {
        name: 'Oversized EveryWear Tunic',
        price: 41,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['white', 'black', 'Lavender'],
        link: 'T-Shirt-Casual',
        id: 7,
        filter: 'Футболки ',
        category: 'lastcollection',
        img: 'https://oldnavy.gap.com/webcontent/0054/700/069/cn54700069.jpg',

        imgProduct: {
            white: ['https://oldnavy.gap.com/webcontent/0054/700/069/cn54700069.jpg', "https://oldnavy.gap.com/webcontent/0054/700/093/cn54700093.jpg", "https://oldnavy.gap.com/webcontent/0054/575/445/cn54575445.jpg"],
            black: ["https://oldnavy.gap.com/webcontent/0054/773/858/cn54773858.jpg", "https://oldnavy.gap.com/webcontent/0054/729/227/cn54729227.jpg", "https://oldnavy.gap.com/webcontent/0054/834/128/cn54834128.jpg", "https://oldnavy.gap.com/webcontent/0054/575/376/cn54575376.jpg"],
            Lavender: ["https://oldnavy.gap.com/webcontent/0054/845/045/cn54845045.jpg", "https://oldnavy.gap.com/webcontent/0054/844/818/cn54844818.jpg", "https://oldnavy.gap.com/webcontent/0054/845/162/cn54845162.jpg", "https://oldnavy.gap.com/webcontent/0054/575/378/cn54575378.jpg"],

        },
        colorImg: [``],
        availability: true,
        page: 1,
    },
    {
        name: 'Vintage Vogue T-Shirt',
        price: 19,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'white', 'red', 'WildCurrant'],
        link: 'T-Shirt-Casual',
        filter: 'Футболки ',
        id: 8,
        category: 'lastcollection',
        img: 'https://oldnavy.gap.com/webcontent/0052/750/508/cn52750508.jpg',
        imgProduct: {

            black: ["https://oldnavy.gap.com/webcontent/0052/750/528/cn52750528.jpg", "https://oldnavy.gap.com/webcontent/0052/750/534/cn52750534.jpg", "https://oldnavy.gap.com/webcontent/0052/625/574/cn52625574.jpg"],
            white: ["https://oldnavy.gap.com/webcontent/0052/780/567/cn52780567.jpg", "https://oldnavy.gap.com/webcontent/0052/780/432/cn52780432.jpg", "https://oldnavy.gap.com/webcontent/0052/780/463/cn52780463.jpg", "https://oldnavy.gap.com/webcontent/0052/625/217/cn52625217.jpg"],
            red: ["https://oldnavy.gap.com/webcontent/0054/136/659/cn54136659.jpg", "https://oldnavy.gap.com/webcontent/0054/136/667/cn54136667.jpg", "https://oldnavy.gap.com/webcontent/0054/045/370/cn54045370.jpg"],
            WildCurrant: ["https://oldnavy.gap.com/webcontent/0052/935/773/cn52935773.jpg", "https://oldnavy.gap.com/webcontent/0052/935/833/cn52935833.jpg", "https://oldnavy.gap.com/webcontent/0052/750/559/cn52750559.jpg", "https://oldnavy.gap.com/webcontent/0052/753/798/cn52753798.jpg"],

        },
        colorImg: [``],
        availability: true,
        page: 1,
    },
    {
        name: 'Ruffled Convertible Bandeau Swim Top for Women',
        price: 20,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'Floral', 'Redflower' ],
        link: 'T-Shirt-Casual',
        id: 9,
        filter: 'Бикини ',
        category: 'lastcollection',
        img: 'https://oldnavy.gap.com/webcontent/0053/567/728/cn53567728.jpg',
        imgProduct: {
            black: ['https://oldnavy.gap.com/webcontent/0053/567/783/cn53567783.jpg',"https://oldnavy.gap.com/webcontent/0053/567/702/cn53567702.jpg", "https://oldnavy.gap.com/webcontent/0053/567/728/cn53567728.jpg","https://oldnavy.gap.com/webcontent/0053/453/823/cn53453823.jpg"],
            Floral: ["https://oldnavy.gap.com/webcontent/0053/577/667/cn53577667.jpg", "https://oldnavy.gap.com/webcontent/0053/577/681/cn53577681.jpg", "https://oldnavy.gap.com/webcontent/0053/449/244/cn53449244.jpg"],
            Redflower:["https://oldnavy.gap.com/webcontent/0053/567/780/cn53567780.jpg","https://oldnavy.gap.com/webcontent/0053/567/704/cn53567704.jpg", "https://oldnavy.gap.com/webcontent/0053/627/905/cn53627905.jpg", "https://oldnavy.gap.com/webcontent/0053/449/404/cn53449404.jpg"]

        },
        colorImg: [`https://oldnavy.gap.com/webcontent/0053/567/480/cn53567480.jpg`, `${Floral}`, redflower],
        availability: true,
        page: 1,
    },
    {
        name: 'Arctic Frost Sweater',
        price: 79,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['yellow', 'blue', 'red', 'black'],
        link: 'T-Shirt-Casual',
        id: 10,
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/796/355/cn54796355.jpg",
        imgProduct: {
            yellow: ["https://oldnavy.gap.com/webcontent/0054/796/360/cn54796360.jpg", "https://oldnavy.gap.com/webcontent/0054/796/391/cn54796391.jpg", "https://oldnavy.gap.com/webcontent/0054/796/735/cn54796735.jpg", "https://oldnavy.gap.com/webcontent/0054/647/416/cn54647416.jpg"],
            blue: ["https://oldnavy.gap.com/webcontent/0054/916/288/cn54916288.jpg", "https://oldnavy.gap.com/webcontent/0054/916/511/cn54916511.jpg", "https://oldnavy.gap.com/webcontent/0054/916/334/cn54916334.jpg", "https://oldnavy.gap.com/webcontent/0054/907/590/cn54907590.jpg"],
            red: ["https://oldnavy.gap.com/webcontent/0054/844/952/cn54844952.jpg", "https://oldnavy.gap.com/webcontent/0054/844/816/cn54844816.jpg", "https://oldnavy.gap.com/webcontent/0054/845/187/cn54845187.jpg","https://oldnavy.gap.com/webcontent/0054/647/340/cn54647340.jpg"],
            black: ["https://oldnavy.gap.com/webcontent/0054/652/121/cn54652121.jpg", "https://oldnavy.gap.com/webcontent/0054/651/998/cn54651998.jpg", "https://oldnavy.gap.com/webcontent/0054/652/012/cn54652012.jpg", "https://oldnavy.gap.com/webcontent/0054/543/734/cn54543734.jpg"],
        },
        colorImg: [``],
        availability: true,
        page: 2,
        filter: 'Свитеры ',
    },
    {
        name: 'High-Waisted Linen-Blend',
        price: 79,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Olive', 'black', 'SapphireSky', 'pink'],
        link: 'T-Shirt-Casual',
        id: 11,
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/627/311/cn54627311.jpg",
        imgProduct: "https://oldnavy.gap.com/webcontent/0054/627/317/cn54627317.jpg",
        imgProduct: {
            Olive: ['https://oldnavy.gap.com/webcontent/0054/627/317/cn54627317.jpg', "https://oldnavy.gap.com/webcontent/0054/627/570/cn54627570.jpg", "https://oldnavy.gap.com/webcontent/0054/745/474/cn54745474.jpg","https://oldnavy.gap.com/webcontent/0054/532/754/cn54532754.jpg"],
            black: ["https://oldnavy.gap.com/webcontent/0054/627/459/cn54627459.jpg", "https://oldnavy.gap.com/webcontent/0054/627/422/cn54627422.jpg", "https://oldnavy.gap.com/webcontent/0054/627/575/cn54627575.jpg", "https://oldnavy.gap.com/webcontent/0054/543/654/cn54543654.jpg"],
            SapphireSky: ["https://oldnavy.gap.com/webcontent/0054/641/556/cn54641556.jpg", "https://oldnavy.gap.com/webcontent/0054/744/946/cn54744946.jpg", "https://oldnavy.gap.com/webcontent/0054/744/948/cn54744948.jpg", "https://oldnavy.gap.com/webcontent/0054/575/192/cn54575192.jpg"],
            pink:["https://oldnavy.gap.com/webcontent/0054/687/946/cn54687946.jpg","https://oldnavy.gap.com/webcontent/0054/688/142/cn54688142.jpg", "https://oldnavy.gap.com/webcontent/0054/575/285/cn54575285.jpg"]

        },
        colorImg: [''],
        availability: true,
        page: 2,
        filter: 'Шорты ',

    },
    {
        name: 'Short-Sleeve Waffle-Knit Henley Top for Women',
        price: 79,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['brown', 'white', 'pink', 'black'],
        link: 'T-Shirt-Casual',
        id: 12,
        category: 'lastcollection',
        img: 'https://oldnavy.gap.com/webcontent/0054/659/425/cn54659425.jpg',
        imgProduct: 'https://oldnavy.gap.com/webcontent/0054/659/425/cn54659425.jpg',
        imgProduct: {

            brown: ["https://oldnavy.gap.com/webcontent/0054/659/425/cn54659425.jpg", "https://oldnavy.gap.com/webcontent/0054/659/473/cn54659473.jpg", "https://oldnavy.gap.com/webcontent/0054/659/486/cn54659486.jpg", "https://oldnavy.gap.com/webcontent/0054/537/034/cn54537034.jpg"],
            white: ["https://oldnavy.gap.com/webcontent/0054/667/960/cn54667960.jpg", "https://oldnavy.gap.com/webcontent/0054/668/060/cn54668060.jpg", "https://oldnavy.gap.com/webcontent/0054/668/090/cn54668090.jpg", "https://oldnavy.gap.com/webcontent/0054/527/425/cn54527425.jpg"],
            pink: ["https://oldnavy.gap.com/webcontent/0054/626/357/cn54626357.jpg", "https://oldnavy.gap.com/webcontent/0054/626/583/cn54626583.jpg", "https://oldnavy.gap.com/webcontent/0054/668/096/cn54668096.jpg", "https://oldnavy.gap.com/webcontent/0054/537/019/cn54537019.jpg"],
            black: ["https://oldnavy.gap.com/webcontent/0054/650/839/cn54650839.jpg", "https://oldnavy.gap.com/webcontent/0054/650/934/cn54650934.jpg", "https://oldnavy.gap.com/webcontent/0054/651/618/cn54651618.jpg", "https://oldnavy.gap.com/webcontent/0054/537/012/cn54537012.jpg"],

        },
        colorImg: [``],
        availability: true,
        page: 2,
        filter: 'Футболки ',

    },
    {
        name: 'Celestial Cascade Dress',
        price: 45,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['white', 'darkgreen', 'black'],
        link: 'T-Shirt-Casual',
        id: 13,
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/868/294/cn54868294.jpg",
        imgProduct: "https://oldnavy.gap.com/webcontent/0054/868/308/cn54868308.jpg",
        imgProduct: {
            white: ['https://oldnavy.gap.com/webcontent/0054/868/308/cn54868308.jpg', "https://oldnavy.gap.com/webcontent/0054/810/429/cn54810429.jpg", "https://oldnavy.gap.com/webcontent/0054/810/596/cn54810596.jpg"],
            darkgreen: ["https://oldnavy.gap.com/webcontent/0054/844/933/cn54844933.jpg", "https://oldnavy.gap.com/webcontent/0054/845/100/cn54845100.jpg", "https://oldnavy.gap.com/webcontent/0054/810/451/cn54810451.jpg", "https://oldnavy.gap.com/webcontent/0054/857/892/cn54857892.jpg"],
            black: ["https://oldnavy.gap.com/webcontent/0054/817/727/cn54817727.jpg", "https://oldnavy.gap.com/webcontent/0054/817/561/cn54817561.jpg", "https://oldnavy.gap.com/webcontent/0054/817/667/cn54817667.jpg", "https://oldnavy.gap.com/webcontent/0054/810/463/cn54810463.jpg"],

        },
        colorImg: [``],
        availability: true,
        page: 2,
        filter: 'Платье ',

    },
    {
        name: 'Taylor Relaxed Suit Blazer for Women',
        price: 26,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['skyblue', 'orange', 'AuroraRed', 'brown'],
        link: 'T-Shirt-Casual',
        id: 14,
        filter: 'Куртки ',
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/635/177/cn54635177.jpg",
        imgProduct: "https://oldnavy.gap.com/webcontent/0054/635/182/cn54635182.jpg",
        imgProduct: {
            skyblue: ['https://oldnavy.gap.com/webcontent/0054/635/182/cn54635182.jpg', "https://oldnavy.gap.com/webcontent/0054/635/246/cn54635246.jpg", "https://oldnavy.gap.com/webcontent/0054/635/443/cn54635443.jpg", "https://oldnavy.gap.com/webcontent/0054/635/250/cn54635250.jpg"],
            orange: ["https://oldnavy.gap.com/webcontent/0054/699/992/cn54699992.jpg", "https://oldnavy.gap.com/webcontent/0054/700/011/cn54700011.jpg", "https://oldnavy.gap.com/webcontent/0054/700/107/cn54700107.jpg", "https://oldnavy.gap.com/webcontent/0054/700/014/cn54700014.jpg"],
            brown:["https://oldnavy.gap.com/webcontent/0053/781/740/cn53781740.jpg","https://oldnavy.gap.com/webcontent/0053/781/575/cn53781575.jpg", "https://oldnavy.gap.com/webcontent/0053/781/576/cn53781576.jpg", "https://oldnavy.gap.com/webcontent/0053/808/499/cn53808499.jpg"],
            AuroraRed:["https://oldnavy.gap.com/webcontent/0054/040/550/cn54040550.jpg","https://oldnavy.gap.com/webcontent/0054/040/660/cn54040660.jpg","https://oldnavy.gap.com/webcontent/0054/040/494/cn54040494.jpg", "https://oldnavy.gap.com/webcontent/0054/040/681/cn54040681.jpg"]
        },
        colorImg: [``],
        availability: true,
        page: 2,

    },
    {
        name: 'Whispering Willow Tunic',
        price: 41,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'BlackFlora'],
        link: 'T-Shirt-Casual',
        id: 15,
        filter: 'Платье ',
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/612/055/cn54612055.jpg",
        imgProduct: "https://oldnavy.gap.com/webcontent/0054/612/065/cn54612065.jpg",
        imgProduct: {
            white: ['https://oldnavy.gap.com/webcontent/0054/868/308/cn54868308.jpg', "https://oldnavy.gap.com/webcontent/0054/810/429/cn54810429.jpg", "https://oldnavy.gap.com/webcontent/0054/810/596/cn54810596.jpg"],
            BlackFlora: ["https://oldnavy.gap.com/webcontent/0054/449/174/cn54449174.jpg", "https://oldnavy.gap.com/webcontent/0054/142/198/cn54142198.jpg", "https://oldnavy.gap.com/webcontent/0054/159/448/cn54159448.jpg", "https://oldnavy.gap.com/webcontent/0054/057/660/cn54057660.jpg", "https://oldnavy.gap.com/webcontent/0054/085/808/cn54085808.jpg"],
            black: ["https://oldnavy.gap.com/webcontent/0054/612/065/cn54612065.jpg", "https://oldnavy.gap.com/webcontent/0054/336/602/cn54336602.jpg", "https://oldnavy.gap.com/webcontent/0054/817/667/cn54817667.jpg", "https://oldnavy.gap.com/webcontent/0054/539/036/cn54539036.mp4"],
        },
        colorImg: [``,`${'https://oldnavy.gap.com/webcontent/0054/141/988/cn54141988.jpg'}`],
        availability: true,
        page: 2,

    },
    {
        name: 'Velvet Blazer',
        price: 59,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['darkgreen','black' ],
        link: 'T-Shirt-Casual',
        id: 16,
        filter: 'Куртки ',
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/611/169/cn54611169.jpg",
        
        imgProduct: {
            black: ['https://oldnavy.gap.com/webcontent/0054/611/083/cn54611083.jpg', "https://oldnavy.gap.com/webcontent/0053/927/233/cn53927233.jpg","https://oldnavy.gap.com/webcontent/0054/677/578/cn54677578.jpg", "https://oldnavy.gap.com/webcontent/0053/927/117/cn53927117.jpg"],
            darkgreen: ["https://oldnavy.gap.com/webcontent/0054/611/169/cn54611169.jpg", "https://oldnavy.gap.com/webcontent/0054/071/771/cn54071771.jpg","https://oldnavy.gap.com/webcontent/0054/431/392/cn54431392.jpg","https://oldnavy.gap.com/webcontent/0054/071/775/cn54071775.jpg"],

        },
        colorImg: '',
        availability: true,
        page: 2,

    },
    {
        name: 'Mystic Mirage Leggings',
        price: 46,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['RedFloral'],
        link: 'T-Shirt-Casual',
        id: 17,
        filter: 'Шорты ',
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/618/464/cn54618464.jpg",
        imgProduct: {
            RedFloral: ['https://oldnavy.gap.com/webcontent/0054/618/479/cn54618479.jpg', "https://oldnavy.gap.com/webcontent/0054/618/493/cn54618493.jpg","https://oldnavy.gap.com/webcontent/0054/618/464/cn54618464.jpg", "https://oldnavy.gap.com/webcontent/0054/533/250/cn54533250.jpg"],

        },
        colorImg: [red_bikini],
        availability: true,
        page: 2,

    },
    {
        name: 'Fitted Rib-Knit',
        price: 38,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['gray',  'red', 'brown'],
        link: 'T-Shirt-Casual',
        id: 18,
        filter: 'Свитеры ',
        category: 'lastcollection',
        img: ["https://oldnavy.gap.com/webcontent/0054/234/272/cn54234272.jpg"],
        imgProduct: {
            gray: ['https://oldnavy.gap.com/webcontent/0054/234/272/cn54234272.jpg', "https://oldnavy.gap.com/webcontent/0054/234/297/cn54234297.jpg", "https://oldnavy.gap.com/webcontent/0054/234/308/cn54234308.jpg", "https://oldnavy.gap.com/webcontent/0054/128/448/cn54128448.jpg"],
            red: ["https://oldnavy.gap.com/webcontent/0054/260/338/cn54260338.jpg", "https://oldnavy.gap.com/webcontent/0054/260/266/cn54260266.jpg", "https://oldnavy.gap.com/webcontent/0054/376/258/cn54376258.jpg", "https://oldnavy.gap.com/webcontent/0054/111/980/cn54111980.jpg"],
            brown:["https://oldnavy.gap.com/webcontent/0054/266/840/cn54266840.jpg","https://oldnavy.gap.com/webcontent/0054/266/364/cn54266364.jpg", "https://oldnavy.gap.com/webcontent/0054/347/478/cn54347478.jpg", "https://oldnavy.gap.com/webcontent/0054/112/778/cn54112778.jpg"]
        },
        colorImg: [``],
        availability: true,
        page: 2,

    },
    {
        name: 'Fit & Flare Cami Midi Dress',
        price: 79,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'red'],
        link: 'T-Shirt-Casual',
        id: 19,
        filter: 'Платье ',
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/462/426/cn54462426.jpg",
        imgProduct: {
            black: ["https://oldnavy.gap.com/webcontent/0054/462/453/cn54462453.jpg", "https://oldnavy.gap.com/webcontent/0054/462/426/cn54462426.jpg", "https://oldnavy.gap.com/webcontent/0054/462/777/cn54462777.jpg", "https://oldnavy.gap.com/webcontent/0054/844/971/cn54844971.jpg"],
            red: ["https://oldnavy.gap.com/webcontent/0054/456/468/cn54456468.jpg", "https://oldnavy.gap.com/webcontent/0054/456/507/cn54456507.jpg"],
        },
        colorImg: [`https://oldnavy.gap.com/webcontent/0054/461/968/cn54461968.jpg`, 'https://oldnavy.gap.com/webcontent/0054/455/162/cn54455162.jpg'],
        availability: true,
        page: 3,

    },
    {
        name: 'Hoodie Cozy Comfort',
        price: 62,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'green', 'oatmeal'],
        link: 'Hoodie-Cozy-Comfort',
        id: 20,
        filter: 'Свитеры ',
        category: 'lastcollection',
        img: "https://oldnavy.gap.com/webcontent/0054/572/472/cn54572472.jpg",
     
        imgProduct: {
            black: ["https://oldnavy.gap.com/webcontent/0054/572/484/cn54572484.jpg", "https://oldnavy.gap.com/webcontent/0054/572/591/cn54572591.jpg", "https://oldnavy.gap.com/webcontent/0054/572/927/cn54572927.jpg", "https://oldnavy.gap.com/webcontent/0054/516/968/cn54516968.jpg"],
            green: ["https://oldnavy.gap.com/webcontent/0054/572/660/cn54572660.jpg", "https://oldnavy.gap.com/webcontent/0054/572/917/cn54572917.jpg","https://oldnavy.gap.com/webcontent/0054/572/600/cn54572600.jpg","https://oldnavy.gap.com/webcontent/0054/516/732/cn54516732.jpg"],
            oatmeal:["https://oldnavy.gap.com/webcontent/0054/591/380/cn54591380.jpg","https://oldnavy.gap.com/webcontent/0054/591/434/cn54591434.jpg","https://oldnavy.gap.com/webcontent/0054/591/499/cn54591499.jpg","https://oldnavy.gap.com/webcontent/0054/516/741/cn54516741.jpg"]
        },
        colorImg: ['', oatmeal],
        availability: true,
        page: 3,

    },
];



export default products







const [productsName, setProductsName] = useState([]);
const [productsSetPrice, setProductsSetPrice] = useState([]);
const [productsPrice, setProductsPrice] = useState([]);
const [productsImage, setProductsImage] = useState([]);



const products = response.data;
setProductId(products.map(product => product.productId));
setProductsName(products.map(product => product.productName));
setProductsSetPrice(products.map(product => product.listPrice));
setProductsPrice(products.map(product => product.price));
setProductsImage(products.map(product => product.imageUrl));
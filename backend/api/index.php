<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../classes/ProductView.php';
include_once '../classes/DeleteController.php';
include_once '../classes/ProductFactory.php';
include_once '../classes/Product.php';

$request = $_SERVER["REQUEST_METHOD"];
function checkRequest($request)
{
    switch ($request) {
        case "GET":
            $productModel = new Product();
            $products = $productModel->getProducts();
            $productView = new ProductView();
            echo $productView->showProducts($products);
            break;
        case "POST":
            $productFactory = new ProductFactory();
            $data = json_decode(file_get_contents("php://input"));
            $sku = $data->sku;
            $name = $data->name;
            $price = $data->price;
            $weight = $data->weight;
            $size = $data->size;
            $length = $data->length;
            $width = $data->width;
            $height = $data->height;
            $productType = $data->productType;
            try {
                $product = $productFactory->createProduct($productType);
                $product->setProduct($sku, $name, $price, $productType, $weight, $size, $length, $width, $height);
            } catch (Exception $e) {
                 echo 'Error: ' . $e->getMessage();
            }
            break;
        case "DELETE":
            $deletedItems = new DeleteController();
            $data =  json_decode(file_get_contents("php://input"));
            foreach ($data as $key => $spec) {
                $deletedItems->deletingProduct($spec);
            }
            break;
    }
}

checkRequest($request);
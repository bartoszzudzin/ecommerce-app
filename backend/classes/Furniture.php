<?php
include_once 'Product.php';
include_once 'ProductInterface.php';

class Furniture extends Product implements ProductInterface{
    public function setProduct($sku, $name, $price, $productType, $weight, $size, $length, $width, $height)
    {
            $sql = "INSERT INTO products(sku, name, price, length, width, height, productType) VALUES (?, ? , ? , ?, ?, ?, ?)";
            $params = [$sku, $name, $price, $length, $width, $height, $productType];
            $this->executeQuery($sql, $params);
    }
}
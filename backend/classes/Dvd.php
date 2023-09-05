<?php
include_once 'Product.php';
include_once 'ProductInterface.php';

class Dvd extends Product implements ProductInterface{
    public function setProduct($sku, $name, $price, $productType, $weight, $size, $length, $width, $height)
    {
            $sql = "INSERT INTO products(sku, name, price, size, productType) VALUES (?, ? , ? , ?, ?)";
            $params = [$sku, $name, $price, $size, $productType];
            $this->executeQuery($sql, $params);
    }
}
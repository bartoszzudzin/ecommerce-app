<?php

include_once 'Book.php';
include_once 'Dvd.php';
include_once 'Furniture.php';

class ProductFactory
{
    public static function createProduct($productType)
    {
        switch ($productType) {
            case 'Book':
                return new Book();
            case 'DVD':
                return new Dvd();
            case 'Furniture':
                return new Furniture();
            default:
                throw new Exception("Unknown product type: $productType");
        }
    }
}
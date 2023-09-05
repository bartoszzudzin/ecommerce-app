<?php

include_once 'Product.php';

class ProductView
{
    public function showProducts($products)
    {
        return json_encode($products);
    }
}
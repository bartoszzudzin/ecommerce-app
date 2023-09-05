<?php

include_once 'Product.php';

class DeleteController extends Product
{
    public function deletingProduct($spec)
    {
        $this->deleteProduct($spec);
    }
}
<?php
include_once '../config/dbconfig.php';
class Product extends dbClass
{
    function getProducts()
    {
        $sql = "SELECT * FROM products";
        $stmt = $this->getConnection()->query($sql);
        $result = $stmt->fetchAll();
        return $result;
    }

    protected function executeQuery($sql, $params)
    {
        if (!$this->productExist($params[0])) {
            $stmt = $this->getConnection()->prepare($sql);
            $stmt->execute($params);
        }
    }

    protected function deleteProduct($sku)
    {
        $sql = "DELETE FROM products WHERE sku = ?";
        $stmt = $this->getConnection()->prepare($sql);
        $stmt->execute([$sku]);
    }

    protected function getProductBySku($sku)
    {
        $sql = "SELECT * FROM products WHERE sku = ?";
        $stmt = $this->getConnection()->prepare($sql);
        $stmt->execute([$sku]);
        $existingProduct = $stmt->fetch(PDO::FETCH_ASSOC);
        return $existingProduct;
    }

    protected function productExist($sku){
        $existing = $this->getProductBySku($sku);
        if($existing){
            $response = ['message' => 'SKU is already taken'];
            header('Content-Type: application/json');
            echo json_encode($response);
            return true;
        }else{
            $response = ['message' => null];
            header('Content-Type: application/json');
            echo json_encode($response);
            return false;
        }
    }

}
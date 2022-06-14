<?php

// необходимые HTTP-заголовки
header('Access-Control-Allow-Origin: *');
header('Content-Type: app;ication/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 3600');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Rquested-With');

// получаем соединение с базой данных
include_once '../config/database.php';

// создание объекта товара
include_once '../objects/product.php';

$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

// Получаем отправленные данные

$data = json_decode(file_get_contents('php://input'));


// убеждаемся, что данные не пусты
if (
    !empty($data->name) &&
    !empty($data->price) &&
    !empty($data->description) &&
    !empty($data->characteristics) &&
    !empty($data->image)&&
    !empty($data->category_id)
) {

    // устанавливаем значения свойств товара
    $product->name = $data->name;
    $product->price = $data->price;
    $product->description = $data->description;
    $product->characteristics = $data->characteristics;
    $product->image = $data->image;
    $product->category_id = $data->category_id;
    $product->created = date('Y-m-d H:i:s');

    // создание товара
    if($product->create()) {

        // установим код ответа - 201 создано
        http_response_code(201);

        // сообщим пользователю
        echo json_encode(array('message' => 'Товар был создан'), JSON_UNESCAPED_UNICODE);

    }

    // если не удается создать товар, сообщим пользователю
    else {

        // установим код ответа - 400 неверный запрос
        http_response_code(400);

        //сообщим пользователю
        echo json_encode(array('message' => 'Невозможно создать товар'), JSON_UNESCAPED_UNICODE);


    }

}

// сообщим пользователю, что данные неполные
else {
    // установим код ответа - 400 неверные запрос
    http_response_code(400);

    // сообщим пользователю
    echo json_encode(array('message' => 'Невозможно создать товар. Данные неполные'), JSON_UNESCAPED_UNICODE);
}



?>
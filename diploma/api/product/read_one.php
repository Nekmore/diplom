<?php

// необходимые HTTP-заголовки
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-allow-Methods: GET');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// подключение файла для соединения с базой и файл с объектом
include_once '../config/database.php';
include_once '../objects/product.php';

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// подготовка объекта
$product = new Product($db);

// установим свойство ID записи для чтения
$product->id = isset($_GET['id']) ? $_GET['id'] : die();

// прочитаем детали товара для редактирвания
$product->readOne();

if ($product->name!=null) {

    // создание массива
    $product_arr = array(
        'id' => $product->id,
        'name' => $product->name,
        'description' => $product->description,
        'characteristics' => $product->characteristics,
        'image' => $product->image,
        'price' => $product->price,
        'category_id' => $product->category_id,
        'category_name' => $product->category_name,
    );

    // код ответа - 200 ОК
    http_response_code(200);

    // вывод в формате json
    echo json_encode($product_arr);
}

else {
    // код ответа - 404 не найдено
    http_response_code(404);

    // сообщим пользователю. что товар отсутствует
    echo json_encode(array('message' => 'Товар не существует.'), JSON_UNESCAPED_UNICODE);
}

?>
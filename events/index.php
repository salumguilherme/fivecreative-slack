<?php
    exit;
    if($_SERVER['REQUEST_METHOD'] == "POST") {
        
        $data = json_decode(file_get_contents("php://input"), true);
        
        error_log(print_r($data, 3), 3, __DIR__.'/data.log');
        
        if($data['type'] && $data['type'] == 'url_verification') {
                
            http_response_code(200);
            header('Content-type: text/plain');
            echo $data['challenge'];
            exit;
                
        }
        
    }
    
?>
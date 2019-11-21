<?php error_log(print_r($_REQUEST, true), 3, "/var/www/clients/slack/request.log"); http_response_code(200); echo 'OK'; exit; ?>

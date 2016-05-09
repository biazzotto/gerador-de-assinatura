<?php
$font       = 'assets/fonts/montserrat.ttf';
$imagem     = imagecreatefromjpeg('assets/img/fundo_assinatura.jpg');
$cor_nome   = imagecolorallocate($imagem, 35, 169, 56);
$cor_funcao = imagecolorallocate($imagem, 75, 75, 75);
$cor_info   = imagecolorallocate($imagem, 102, 102, 102);

$nome   = urldecode($_GET['nome']);
$nome_u = mb_strtoupper($nome, 'UTF-8');
$funcao = urldecode($_GET['funcao']);

// imagestring($imagem, 5, 191, 24, $nome, $cor_nome);
// imagestring($imagem, 3, 191, 50, $funcao, $cor_funcao);
imagettftext($imagem, 13, 0, 191, 39, $cor_nome, $font, $nome_u);
imagettftext($imagem, 10, 0, 191, 61, $cor_funcao, $font, $funcao);

imagettftext($imagem, 8, 0, 204, 87, $cor_info, $font, 'Rua Gerson França, 14-77 - Vila Mesquita');
imagettftext($imagem, 8, 0, 204, 101, $cor_info, $font, 'CEP 17014-380 - Bauru/SP');

imagettftext($imagem, 8, 0, 204, 122, $cor_info, $font, '(14) 3227-4367 / 3206-8024 / 3879-8024');

$filename     = 'assinatura_'.strtolower(str_replace('+', '_', urlencode($nome_u))).'.jpg';
$filename_md5 = md5($nome.$funcao).'.jpg';
$path         = $_SERVER['DOCUMENT_ROOT'].str_replace('imagem.php', '', $_SERVER['PHP_SELF']).'assets/upload/';
if (!file_exists($path.$filename_md5)) {
  imagejpeg($imagem, $path.$filename_md5, 100);
}

header('Content-type: image/jpeg');
if (isset($_GET['download']) && $_GET['download']) {
  $filename = 'assinatura_'.strtolower(str_replace('+', '_', urlencode($nome))).'.jpg';
  header('Content-Disposition: attachment; filename='.$filename);
}
imagejpeg($imagem, NULL, 100);
?>

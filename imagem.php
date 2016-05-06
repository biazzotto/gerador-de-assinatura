<?php
$font       = 'assets/fonts/montserrat.ttf';
$imagem     = imagecreatefromjpeg('assets/img/fundo_assinatura.jpg');
$cor_nome   = imagecolorallocate($imagem, 35, 169, 56);
$cor_funcao = imagecolorallocate($imagem, 75, 75, 75);

$nome   = mb_strtoupper(urldecode($_GET['nome']));
$funcao = urldecode($_GET['funcao']);

// imagestring($imagem, 5, 191, 24, $nome, $cor_nome);
// imagestring($imagem, 3, 191, 50, $funcao, $cor_funcao);
imagettftext($imagem, 13, 0, 191, 39, $cor_nome, $font, $nome);
imagettftext($imagem, 10, 0, 191, 61, $cor_funcao, $font, $funcao);

header('Content-type: image/jpeg');
if (isset($_GET['download']) && $_GET['download']) {
  $filename = 'assinatura_'.strtolower(str_replace('+', '_', urlencode($nome))).'.jpg';
  header('Content-Disposition: attachment; filename='.$filename);
}
imagejpeg($imagem, NULL, 100);
?>

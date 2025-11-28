<?php
// Votre adresse email de réception
$to = "contact@ingrid-paris.fr";  // <-- À ajuster !

$subject = "Nouvelle réservation reçue via Ingrid-Paris.fr";

// Récupération sécurisée des données du formulaire
$name        = trim($_POST['name']        ?? '(Nom non renseigné)');
$phone       = trim($_POST['phone']       ?? '(Téléphone non renseigné)');
$address     = trim($_POST['address']     ?? '(Adresse non renseignée)');
$date        = trim($_POST['date']        ?? '(Date non renseignée)');
$time        = trim($_POST['time']        ?? '(Heure non renseignée)');
$category    = trim($_POST['category']    ?? '(Catégorie non renseignée)');
$service     = trim($_POST['service']     ?? '(Service non renseigné)');
$option      = trim($_POST['option']      ?? '(Option non renseignnée)'); // ex: "1h-90"
$infoRequest = trim($_POST['infoRequest'] ?? '(Aucune demande supplémentaire)');

// Parse option pour extraire durée en minutes et prix
list($durationStr, $price) = explode('-', $option) + [null, null];
$durationMinutes = 60; // valeur par défaut
if (strpos($durationStr, 'h') !== false) {
    $durationMinutes = intval($durationStr) * 60;
} elseif (strpos($durationStr, 'mn') !== false) {
    $durationMinutes = intval($durationStr);
}

// Construction du message texte
$textMessage  = "🌸 Nouvelle réservation reçue ! 🌸\n\n";
$textMessage .= "👩 Nom               : $name\n";
$textMessage .= "📞 Téléphone         : $phone\n";
$textMessage .= "🏠 Adresse           : $address\n";
$textMessage .= "📅 Date et heure     : $date à $time\n";
$textMessage .= "💆 Catégorie         : $category\n";
$textMessage .= "💖 Service           : $service\n";
$textMessage .= "⏱️ Durée/ Tarif      : $durationStr / {$price}€\n";
$textMessage .= "📝 Infos supplémentaires : $infoRequest\n";

// Génération du contenu iCalendar (ICS)
function buildICS($data, $durationMinutes) {
    $dtStart = new DateTime("{$data['date']} {$data['time']}", new DateTimeZone('Europe/Paris'));
    $dtEnd   = (clone $dtStart)->add(new DateInterval("PT{$durationMinutes}M"));

    // Format UTC pour l'ICS
    $startUtc = $dtStart->setTimezone(new DateTimeZone('UTC'))->format('Ymd\THis\Z');
    $endUtc   = $dtEnd  ->setTimezone(new DateTimeZone('UTC'))->format('Ymd\THis\Z');
    $uid      = uniqid();

    $ics  = "BEGIN:VCALENDAR\r\n";
    $ics .= "VERSION:2.0\r\n";
    $ics .= "PRODID:-//Ingrid-Paris//Reservation//FR\r\n";
    $ics .= "METHOD:REQUEST\r\n";
    $ics .= "BEGIN:VEVENT\r\n";
    $ics .= "UID:{$uid}\r\n";
    $ics .= "DTSTAMP:".gmdate('Ymd\THis')."Z\r\n";
    $ics .= "DTSTART:{$startUtc}\r\n";
    $ics .= "DTEND:{$endUtc}\r\n";
    $ics .= "SUMMARY:RDV - {$data['service']}\r\n";
    $description = "Client: {$data['name']}\\nTel: {$data['phone']}\\nAdresse: {$data['address']}\\nInfos: {$data['infoRequest']}";
    $ics .= "DESCRIPTION:{$description}\r\n";
    $ics .= "LOCATION:{$data['address']}\r\n";
    $ics .= "END:VEVENT\r\n";
    $ics .= "END:VCALENDAR\r\n";

    return $ics;
}

$data = [
  'name'        => $name,
  'phone'       => $phone,
  'address'     => $address,
  'date'        => $date,
  'time'        => $time,
  'service'     => $service,
  'infoRequest' => str_replace("\n", '\\n', $infoRequest),
];
$icsContent = buildICS($data, $durationMinutes);

// Préparation de l’email multipart/alternative
$boundary = "----=_Part_" . md5(uniqid());

// En-têtes
$headers  = "From: \"Ingrid Paris\" <contact@ingrid-paris.fr>\r\n";
$headers .= "Reply-To: contact@ingrid-paris.fr\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";

// Corps du message
$body  = "--{$boundary}\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $textMessage . "\r\n";

$body .= "--{$boundary}\r\n";
$body .= "Content-Type: text/calendar; charset=UTF-8; method=REQUEST\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $icsContent . "\r\n";

$body .= "--{$boundary}--";

// Envoi
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}

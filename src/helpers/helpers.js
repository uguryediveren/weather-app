export default function UnixToDate(unix) {
    var today = new Date(unix * 1000).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'short',
    }).split(' ').join('-');
    return today
}
import moment from 'moment';

export default function(date, format = 'LL', locale = 'en') {
    if (!date) return '';
    moment.locale(locale);
    return moment(date).format(format);
}

export const ROLES_ACCESO = ['admin', 'empresa'];
export const ROLES = ['admin', 'empresa', 'usuario'];

export const DESCUENTOS = [
	{ value: 0.0, descuento: '0%' },
	{ value: 0.05, descuento: '5%' },
	{ value: 0.1, descuento: '10%' },
	{ value: 0.15, descuento: '15%' },
	{ value: 0.2, descuento: '20%' },
	{ value: 0.25, descuento: '25%' },
	{ value: 0.3, descuento: '30%' },
	{ value: 0.35, descuento: '35%' },
	{ value: 0.4, descuento: '40%' },
	{ value: 0.45, descuento: '45%' },
	{ value: 0.5, descuento: '50%' },
	{ value: 0.55, descuento: '55%' },
	{ value: 0.6, descuento: '60%' },
	{ value: 0.65, descuento: '65%' },
	{ value: 0.7, descuento: '70%' },
	{ value: 0.75, descuento: '75%' },
	{ value: 0.8, descuento: '80%' },
	{ value: 0.85, descuento: '85%' },
	{ value: 0.9, descuento: '90%' },
	{ value: 0.95, descuento: '95%' },
	{ value: 0.99, descuento: '99%' },
];

export const FILTROS = [
	{ nombre: 'Más vendidos', value: 'mas-vendidos' },
	{ nombre: 'Alfabéticamente, A-Z', value: 'A-Z' },
	{ nombre: 'Alfabéticamente, Z-A', value: 'Z-A' },
	{ nombre: 'Precio, menor a mayor', value: 'precio-menor-mayor' },
	{ nombre: 'Precio, mayor a menor', value: 'precio-mayor-menor' },
	{ nombre: 'Fecha: antiguo(a) a reciente', value: 'fecha-antigua-reciente' },
	{ nombre: 'Fecha: reciente a antiguo(a)', value: 'fecha-reciente-antigua' },
	{ nombre: 'Descuentos de mayor a menor', value: 'descuento-mayor-menor' },
	{ nombre: 'Descuentos de menor a mayor', value: 'descuento-menor-mayor' },
];

export const GENEROS = [
	{ genero: 'Hombre' },
	{ genero: 'Mujer' },
	{ genero: 'Unisex' },
];

export const PAISES = [
	{ codigo: 'BD', pais: 'Bangladesh' },
	{ codigo: 'BE', pais: 'Belgium' },
	{ codigo: 'BF', pais: 'Burkina Faso' },
	{ codigo: 'BG', pais: 'Bulgaria' },
	{ codigo: 'BA', pais: 'Bosnia and Herzegovina' },
	{ codigo: 'BB', pais: 'Barbados' },
	{ codigo: 'WF', pais: 'Wallis and Futuna' },
	{ codigo: 'BL', pais: 'Saint Barthelemy' },
	{ codigo: 'BM', pais: 'Bermuda' },
	{ codigo: 'BN', pais: 'Brunei' },
	{ codigo: 'BO', pais: 'Bolivia' },
	{ codigo: 'BH', pais: 'Bahrain' },
	{ codigo: 'BI', pais: 'Burundi' },
	{ codigo: 'BJ', pais: 'Benin' },
	{ codigo: 'BT', pais: 'Bhutan' },
	{ codigo: 'JM', pais: 'Jamaica' },
	{ codigo: 'BV', pais: 'Bouvet Island' },
	{ codigo: 'BW', pais: 'Botswana' },
	{ codigo: 'WS', pais: 'Samoa' },
	{ codigo: 'BQ', pais: 'Bonaire, Saint Eustatius and Saba ' },
	{ codigo: 'BR', pais: 'Brazil' },
	{ codigo: 'BS', pais: 'Bahamas' },
	{ codigo: 'JE', pais: 'Jersey' },
	{ codigo: 'BY', pais: 'Belarus' },
	{ codigo: 'BZ', pais: 'Belize' },
	{ codigo: 'RU', pais: 'Russia' },
	{ codigo: 'RW', pais: 'Rwanda' },
	{ codigo: 'RS', pais: 'Serbia' },
	{ codigo: 'TL', pais: 'East Timor' },
	{ codigo: 'RE', pais: 'Reunion' },
	{ codigo: 'TM', pais: 'Turkmenistan' },
	{ codigo: 'TJ', pais: 'Tajikistan' },
	{ codigo: 'RO', pais: 'Romania' },
	{ codigo: 'TK', pais: 'Tokelau' },
	{ codigo: 'GW', pais: 'Guinea-Bissau' },
	{ codigo: 'GU', pais: 'Guam' },
	{ codigo: 'GT', pais: 'Guatemala' },
	{ codigo: 'GS', pais: 'South Georgia and the South Sandwich Islands' },
	{ codigo: 'GR', pais: 'Greece' },
	{ codigo: 'GQ', pais: 'Equatorial Guinea' },
	{ codigo: 'GP', pais: 'Guadeloupe' },
	{ codigo: 'JP', pais: 'Japan' },
	{ codigo: 'GY', pais: 'Guyana' },
	{ codigo: 'GG', pais: 'Guernsey' },
	{ codigo: 'GF', pais: 'French Guiana' },
	{ codigo: 'GE', pais: 'Georgia' },
	{ codigo: 'GD', pais: 'Grenada' },
	{ codigo: 'GB', pais: 'United Kingdom' },
	{ codigo: 'GA', pais: 'Gabon' },
	{ codigo: 'SV', pais: 'El Salvador' },
	{ codigo: 'GN', pais: 'Guinea' },
	{ codigo: 'GM', pais: 'Gambia' },
	{ codigo: 'GL', pais: 'Greenland' },
	{ codigo: 'GI', pais: 'Gibraltar' },
	{ codigo: 'GH', pais: 'Ghana' },
	{ codigo: 'OM', pais: 'Oman' },
	{ codigo: 'TN', pais: 'Tunisia' },
	{ codigo: 'JO', pais: 'Jordan' },
	{ codigo: 'HR', pais: 'Croatia' },
	{ codigo: 'HT', pais: 'Haiti' },
	{ codigo: 'HU', pais: 'Hungary' },
	{ codigo: 'HK', pais: 'Hong Kong' },
	{ codigo: 'HN', pais: 'Honduras' },
	{ codigo: 'HM', pais: 'Heard Island and McDonald Islands' },
	{ codigo: 'VE', pais: 'Venezuela' },
	{ codigo: 'PR', pais: 'Puerto Rico' },
	{ codigo: 'PS', pais: 'Palestinian Territory' },
	{ codigo: 'PW', pais: 'Palau' },
	{ codigo: 'PT', pais: 'Portugal' },
	{ codigo: 'SJ', pais: 'Svalbard and Jan Mayen' },
	{ codigo: 'PY', pais: 'Paraguay' },
	{ codigo: 'IQ', pais: 'Iraq' },
	{ codigo: 'PA', pais: 'Panama' },
	{ codigo: 'PF', pais: 'French Polynesia' },
	{ codigo: 'PG', pais: 'Papua New Guinea' },
	{ codigo: 'PE', pais: 'Peru' },
	{ codigo: 'PK', pais: 'Pakistan' },
	{ codigo: 'PH', pais: 'Philippines' },
	{ codigo: 'PN', pais: 'Pitcairn' },
	{ codigo: 'PL', pais: 'Poland' },
	{ codigo: 'PM', pais: 'Saint Pierre and Miquelon' },
	{ codigo: 'ZM', pais: 'Zambia' },
	{ codigo: 'EH', pais: 'Western Sahara' },
	{ codigo: 'EE', pais: 'Estonia' },
	{ codigo: 'EG', pais: 'Egypt' },
	{ codigo: 'ZA', pais: 'South Africa' },
	{ codigo: 'EC', pais: 'Ecuador' },
	{ codigo: 'IT', pais: 'Italy' },
	{ codigo: 'VN', pais: 'Vietnam' },
	{ codigo: 'SB', pais: 'Solomon Islands' },
	{ codigo: 'ET', pais: 'Ethiopia' },
	{ codigo: 'SO', pais: 'Somalia' },
	{ codigo: 'ZW', pais: 'Zimbabwe' },
	{ codigo: 'SA', pais: 'Saudi Arabia' },
	{ codigo: 'ES', pais: 'Spain' },
	{ codigo: 'ER', pais: 'Eritrea' },
	{ codigo: 'ME', pais: 'Montenegro' },
	{ codigo: 'MD', pais: 'Moldova' },
	{ codigo: 'MG', pais: 'Madagascar' },
	{ codigo: 'MF', pais: 'Saint Martin' },
	{ codigo: 'MA', pais: 'Morocco' },
	{ codigo: 'MC', pais: 'Monaco' },
	{ codigo: 'UZ', pais: 'Uzbekistan' },
	{ codigo: 'MM', pais: 'Myanmar' },
	{ codigo: 'ML', pais: 'Mali' },
	{ codigo: 'MO', pais: 'Macao' },
	{ codigo: 'MN', pais: 'Mongolia' },
	{ codigo: 'MH', pais: 'Marshall Islands' },
	{ codigo: 'MK', pais: 'Macedonia' },
	{ codigo: 'MU', pais: 'Mauritius' },
	{ codigo: 'MT', pais: 'Malta' },
	{ codigo: 'MW', pais: 'Malawi' },
	{ codigo: 'MV', pais: 'Maldives' },
	{ codigo: 'MQ', pais: 'Martinique' },
	{ codigo: 'MP', pais: 'Northern Mariana Islands' },
	{ codigo: 'MS', pais: 'Montserrat' },
	{ codigo: 'MR', pais: 'Mauritania' },
	{ codigo: 'IM', pais: 'Isle of Man' },
	{ codigo: 'UG', pais: 'Uganda' },
	{ codigo: 'TZ', pais: 'Tanzania' },
	{ codigo: 'MY', pais: 'Malaysia' },
	{ codigo: 'MX', pais: 'Mexico' },
	{ codigo: 'IL', pais: 'Israel' },
	{ codigo: 'FR', pais: 'France' },
	{ codigo: 'IO', pais: 'British Indian Ocean Territory' },
	{ codigo: 'SH', pais: 'Saint Helena' },
	{ codigo: 'FI', pais: 'Finland' },
	{ codigo: 'FJ', pais: 'Fiji' },
	{ codigo: 'FK', pais: 'Falkland Islands' },
	{ codigo: 'FM', pais: 'Micronesia' },
	{ codigo: 'FO', pais: 'Faroe Islands' },
	{ codigo: 'NI', pais: 'Nicaragua' },
	{ codigo: 'NL', pais: 'Netherlands' },
	{ codigo: 'NO', pais: 'Norway' },
	{ codigo: 'NA', pais: 'Namibia' },
	{ codigo: 'VU', pais: 'Vanuatu' },
	{ codigo: 'NC', pais: 'New Caledonia' },
	{ codigo: 'NE', pais: 'Niger' },
	{ codigo: 'NF', pais: 'Norfolk Island' },
	{ codigo: 'NG', pais: 'Nigeria' },
	{ codigo: 'NZ', pais: 'New Zealand' },
	{ codigo: 'NP', pais: 'Nepal' },
	{ codigo: 'NR', pais: 'Nauru' },
	{ codigo: 'NU', pais: 'Niue' },
	{ codigo: 'CK', pais: 'Cook Islands' },
	{ codigo: 'XK', pais: 'Kosovo' },
	{ codigo: 'CI', pais: 'Ivory Coast' },
	{ codigo: 'CH', pais: 'Switzerland' },
	{ codigo: 'CO', pais: 'Colombia' },
	{ codigo: 'CN', pais: 'China' },
	{ codigo: 'CM', pais: 'Cameroon' },
	{ codigo: 'CL', pais: 'Chile' },
	{ codigo: 'CC', pais: 'Cocos Islands' },
	{ codigo: 'CA', pais: 'Canada' },
	{ codigo: 'CG', pais: 'Republic of the Congo' },
	{ codigo: 'CF', pais: 'Central African Republic' },
	{ codigo: 'CD', pais: 'Democratic Republic of the Congo' },
	{ codigo: 'CZ', pais: 'Czech Republic' },
	{ codigo: 'CY', pais: 'Cyprus' },
	{ codigo: 'CX', pais: 'Christmas Island' },
	{ codigo: 'CR', pais: 'Costa Rica' },
	{ codigo: 'CW', pais: 'Curacao' },
	{ codigo: 'CV', pais: 'Cape Verde' },
	{ codigo: 'CU', pais: 'Cuba' },
	{ codigo: 'SZ', pais: 'Swaziland' },
	{ codigo: 'SY', pais: 'Syria' },
	{ codigo: 'SX', pais: 'Sint Maarten' },
	{ codigo: 'KG', pais: 'Kyrgyzstan' },
	{ codigo: 'KE', pais: 'Kenya' },
	{ codigo: 'SS', pais: 'South Sudan' },
	{ codigo: 'SR', pais: 'Suriname' },
	{ codigo: 'KI', pais: 'Kiribati' },
	{ codigo: 'KH', pais: 'Cambodia' },
	{ codigo: 'KN', pais: 'Saint Kitts and Nevis' },
	{ codigo: 'KM', pais: 'Comoros' },
	{ codigo: 'ST', pais: 'Sao Tome and Principe' },
	{ codigo: 'SK', pais: 'Slovakia' },
	{ codigo: 'KR', pais: 'South Korea' },
	{ codigo: 'SI', pais: 'Slovenia' },
	{ codigo: 'KP', pais: 'North Korea' },
	{ codigo: 'KW', pais: 'Kuwait' },
	{ codigo: 'SN', pais: 'Senegal' },
	{ codigo: 'SM', pais: 'San Marino' },
	{ codigo: 'SL', pais: 'Sierra Leone' },
	{ codigo: 'SC', pais: 'Seychelles' },
	{ codigo: 'KZ', pais: 'Kazakhstan' },
	{ codigo: 'KY', pais: 'Cayman Islands' },
	{ codigo: 'SG', pais: 'Singapore' },
	{ codigo: 'SE', pais: 'Sweden' },
	{ codigo: 'SD', pais: 'Sudan' },
	{ codigo: 'DO', pais: 'Dominican Republic' },
	{ codigo: 'DM', pais: 'Dominica' },
	{ codigo: 'DJ', pais: 'Djibouti' },
	{ codigo: 'DK', pais: 'Denmark' },
	{ codigo: 'VG', pais: 'British Virgin Islands' },
	{ codigo: 'DE', pais: 'Germany' },
	{ codigo: 'YE', pais: 'Yemen' },
	{ codigo: 'DZ', pais: 'Algeria' },
	{ codigo: 'US', pais: 'United States' },
	{ codigo: 'UY', pais: 'Uruguay' },
	{ codigo: 'YT', pais: 'Mayotte' },
	{ codigo: 'UM', pais: 'United States Minor Outlying Islands' },
	{ codigo: 'LB', pais: 'Lebanon' },
	{ codigo: 'LC', pais: 'Saint Lucia' },
	{ codigo: 'LA', pais: 'Laos' },
	{ codigo: 'TV', pais: 'Tuvalu' },
	{ codigo: 'TW', pais: 'Taiwan' },
	{ codigo: 'TT', pais: 'Trinidad and Tobago' },
	{ codigo: 'TR', pais: 'Turkey' },
	{ codigo: 'LK', pais: 'Sri Lanka' },
	{ codigo: 'LI', pais: 'Liechtenstein' },
	{ codigo: 'LV', pais: 'Latvia' },
	{ codigo: 'TO', pais: 'Tonga' },
	{ codigo: 'LT', pais: 'Lithuania' },
	{ codigo: 'LU', pais: 'Luxembourg' },
	{ codigo: 'LR', pais: 'Liberia' },
	{ codigo: 'LS', pais: 'Lesotho' },
	{ codigo: 'TH', pais: 'Thailand' },
	{ codigo: 'TF', pais: 'French Southern Territories' },
	{ codigo: 'TG', pais: 'Togo' },
	{ codigo: 'TD', pais: 'Chad' },
	{ codigo: 'TC', pais: 'Turks and Caicos Islands' },
	{ codigo: 'LY', pais: 'Libya' },
	{ codigo: 'VA', pais: 'Vatican' },
	{ codigo: 'VC', pais: 'Saint Vincent and the Grenadines' },
	{ codigo: 'AE', pais: 'United Arab Emirates' },
	{ codigo: 'AD', pais: 'Andorra' },
	{ codigo: 'AG', pais: 'Antigua and Barbuda' },
	{ codigo: 'AF', pais: 'Afghanistan' },
	{ codigo: 'AI', pais: 'Anguilla' },
	{ codigo: 'VI', pais: 'U.S. Virgin Islands' },
	{ codigo: 'IS', pais: 'Iceland' },
	{ codigo: 'IR', pais: 'Iran' },
	{ codigo: 'AM', pais: 'Armenia' },
	{ codigo: 'AL', pais: 'Albania' },
	{ codigo: 'AO', pais: 'Angola' },
	{ codigo: 'AQ', pais: 'Antarctica' },
	{ codigo: 'AS', pais: 'American Samoa' },
	{ codigo: 'AR', pais: 'Argentina' },
	{ codigo: 'AU', pais: 'Australia' },
	{ codigo: 'AT', pais: 'Austria' },
	{ codigo: 'AW', pais: 'Aruba' },
	{ codigo: 'IN', pais: 'India' },
	{ codigo: 'AX', pais: 'Aland Islands' },
	{ codigo: 'AZ', pais: 'Azerbaijan' },
	{ codigo: 'IE', pais: 'Ireland' },
	{ codigo: 'ID', pais: 'Indonesia' },
	{ codigo: 'UA', pais: 'Ukraine' },
	{ codigo: 'QA', pais: 'Qatar' },
	{ codigo: 'MZ', pais: 'Mozambique' },
];

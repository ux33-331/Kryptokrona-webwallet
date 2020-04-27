let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.getmasari.org/api/',
	trustedDaemonsAddresses:[
		'https://wallet.getmasari.org:38084/'
	],
	phpRelay:typeof window !== 'undefined' ? true : false,
	mainnetExplorerUrl: "https://explorer.getmasari.org/",
	mainnetExplorerUrlHash: "https://explorer.getmasari.org/transaction.html?hash={ID}",
	mainnetExplorerUrlBlock: "https://explorer.getmasari.org/block.html?height={ID}",
	testnetExplorerUrl: "http://testnet.msrchain.net/",
	testnetExplorerUrlHash: "http://testnet.msrchain.net/tx/{ID}",
	testnetExplorerUrlBlock: "http://testnet.msrchain.net/block/{ID}",
	testnet: false,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 28,
	integratedAddressPrefix: 29,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 52,
	subAddressPrefixTestnet: 73,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 12, // default value mixin

<<<<<<< HEAD
	// idleTimeout: 30,
	// idleWarningDuration: 20,

	// coinSymbol: 'MSR',
	// openAliasPrefix: "msr",
	// coinName: 'Masari',
	// coinUriPrefix: 'masari:',
	// avgBlockTime: 60,
	// maxBlockNumber: 500000000,

	// donationAddresses : [
	// 	'5qfrSvgYutM1aarmQ1px4aDiY9Da7CLKKDo3UkPuUnQ7bT7tr7i4spuLaiZwXG1dFQbkCinRUNeUNLoNh342sVaqTaWqvt8',
	// 	'5nYWvcvNThsLaMmrsfpRLBRou1RuGtLabUwYH7v6b88bem2J4aUwsoF33FbJuqMDgQjpDRTSpLCZu3dXpqXicE2uSWS4LUP',
	// 	'9ppu34ocgmeZiv4nS2FyQTFLL5wBFQZkhAfph7wGcnFkc8fkCgTJqxnXuBkaw1v2BrUW7iMwKoQy2HXRXzDkRE76Cz7WXkD'
	// ]

    apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'http://wallet.kryptokrona.se/api/',
	 trustedDaemonsAddresses:[
	 	'http://wallet.kryptokrona.se/api/'
	 ],
	//apiUrl: 'http://wallet.kryptokrona.se/api/', //temporary testing front end
	mainnetExplorerUrl: "http://explorer.kryptokrona.com",
    coinUnitPlaces: 2,
    coinDisplayUnitPlaces: 2,
	txMinConfirms: 60,         
	txCoinbaseMinConfirms: 120, 
	addressPrefix: 2239254,
	integratedAddressPrefix: 0,
    addressPrefixTestnet: 0,
    integratedAddressPrefixTestnet: 0,
    subAddressPrefix: 0,
    subAddressPrefixTestnet: 0,
    feePerKB: new JSBigInt('100'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('1'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 7, // default value mixins
=======
>>>>>>> parent of 3c8eeb4... initial kryptokrona changes
	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'MSR',
	openAliasPrefix: "msr",
	coinName: 'Masari',
	coinUriPrefix: 'masari:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'5qfrSvgYutM1aarmQ1px4aDiY9Da7CLKKDo3UkPuUnQ7bT7tr7i4spuLaiZwXG1dFQbkCinRUNeUNLoNh342sVaqTaWqvt8',
		'5nYWvcvNThsLaMmrsfpRLBRou1RuGtLabUwYH7v6b88bem2J4aUwsoF33FbJuqMDgQjpDRTSpLCZu3dXpqXicE2uSWS4LUP',
		'9ppu34ocgmeZiv4nS2FyQTFLL5wBFQZkhAfph7wGcnFkc8fkCgTJqxnXuBkaw1v2BrUW7iMwKoQy2HXRXzDkRE76Cz7WXkD'
	]
};

exports.fmt = {
    c: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 6 }),
    c0: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    n0: new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 0 }),
    n2: new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }),
    n6: new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 6 }),
    p2: new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }),
};
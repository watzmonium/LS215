// Write a function that when given a URL as a string, parses out just the domain name and 
// returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//

// algorithm
// write a regular expression to filter out https://www.
// split on the period and return the first entry

function domainName(url){
  const regex = /(http.*:\/\/)*(www\.)*/ig;
  let domain = url.replace(regex, '');
  return domain.split('.')[0];
};

console.log(domainName('http://www.google.com/') === 'google');
console.log(domainName('https://www.google.com/') === 'google');
console.log(domainName('www.google.com/') === 'google');
console.log(domainName('http://www.google.net/') === 'google');
console.log(domainName('google.com/') === 'google');
console.log(domainName('http://www.google.com/adsad/adasd?dad=ada') === 'google');
console.log(domainName('') === '');
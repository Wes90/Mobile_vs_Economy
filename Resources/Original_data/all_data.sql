Create table account_ownership (
	country_name varchar,
	"2011_AO" Decimal,
	"2014_AO" Decimal,
	"2017_AO" Decimal
);

Create table income_per_capita (
	country_name varchar,
	"2011_pci" int,
	"2014_pci" int,
	"2017_pci" int
); 

Create table mobile_subscriptions (
	country_name varchar,
	"2011_subs" bigint,
	"2014_subs" bigint,
	"2017_subs" bigint
);

Select * 
From mobile_subscriptions;

SELECT mobile_subscriptions.country_name, income_per_capita."2011_pci", income_per_capita."2014_pci", income_per_capita."2017_pci"  
FROM mobile_subscriptions
Inner join income_per_capita on income_per_capita.country_name = mobile_subscriptions.country_name; 

SELECT mobile_subscriptions.country_name, account_ownership."2011_AO", account_ownership."2014_AO", account_ownership."2017_AO"  
FROM mobile_subscriptions
Inner join account_ownership on account_ownership.country_name = mobile_subscriptions.country_name; 


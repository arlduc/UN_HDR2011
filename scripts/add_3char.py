import csv, sys
r = csv.reader(open('CSV/Country_name_3char.csv', 'rb'), delimiter=',')
r.next()
c = {}
for row in r:
	c[row[0]] = row[1]

r = csv.reader(open('CSV/MIT_DuKode_Dataset07.csv', 'rU'), delimiter=',')
r.next()

w = csv.writer(open('CSV/MIT_DuKode_Dataset08.csv', 'wb'), delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
w.writerow(["Country","HDI","Environmental_Performance_Index","IHDI_Inequality_adjusted_HDI_value","GII_Gender_Inequality_Index_value","GNI_Gross_National_Income","SUM","Overall_loss_percent","abbrv","continent_region"])

for row in r:
	row[8] = c[row[0]]
	w.writerow(row)
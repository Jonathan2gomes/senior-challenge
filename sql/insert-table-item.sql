INSERT INTO public.item(
	id, manufacturing_date, expiration_date, is_perishable, measure_unit, name, price, quantity)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?);
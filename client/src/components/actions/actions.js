export const page = function(data) {
	return {
		type: "page",
		info: data
	}
}

export const language = function(data) {
	return {
		type: "language",
		info: data
	}
}
export const currency = function(data) {
	return {
		type: "currency",
		info: data
	}
}

export const filter = function(data) {
	return {
		type: "filter",
		info: data
	}
}
export const filterAdd = function(data) {
	return {
		type: "filter_add",
		info: data
	}
}
export const filterRemove = function(data) {
	return {
		type: "filter_remove",
		info: data
	}
}

export const sort = function(data) {
	return {
		type: "sort",
		info: data
	}
}

export const search = function(data) {
	return {
		type: "search",
		info: data
	}
}

export const cartAdd = function(data) {
	return {
		type: "cart_add",
		info: data
	}
}
export const cartUpdate = function(data) {
	return {
		type: "cart_update",
		info: data
	}
}
export const cartRemove = function(data) {
	return {
		type: "cart_remove",
		info: data
	}
}
export const cartRemoveAll = function() {
	return {
		type: "cart_remove_all",
		info: []
	}
}

export const wishAdd = function(data) {
	return {
		type: "wish_add",
		info: data
	}
}
export const wishUpdate = function(data) {
	return {
		type: "wish_update",
		info: data
	}
}
export const wishRemove = function(data) {
	return {
		type: "wish_remove",
		info: data
	}
}
export const wishRemoveAll = function() {
	return {
		type: "wish_remove_all",
		info: []
	}
}
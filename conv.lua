io.write("[", io.read"*all":gsub(".", function(c) return c:byte(1).."," end),"]")

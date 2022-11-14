"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[145],{99723:e=>{e.exports=JSON.parse('{"functions":[{"name":"DeepCopy","desc":"This function \\"deep\\" copies a table, and all of its contents. This means that it will clone the entire table,\\nand tables within that table- as opposed to shallow-copying with table.clone\\n\\n```lua\\nlocal Dictionary = {\\n\\tSomethingInside = {\\n\\t\\tA = 1,\\n\\t\\tB = 2,\\n\\t},\\n}\\n\\nlocal CopiedDictionary = TableKit.DeepCopy(Dictionary, SecondDictionary)\\n\\nprint(CopiedDictionary) -- prints { [\\"SomethingInside\\"] = { [\\"A\\"] = 1, [\\"B\\"] = 1 } }\\n```\\n\\n:::caution Recursive Function\\nThis function is recursive- this can cause stack overflows.","params":[{"name":"tableToClone","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":32,"path":"src/init.luau"}},{"name":"MergeDictionary","desc":"This function merges two dictionaries.\\n\\nKeys *will* overwrite- if there are duplicate keys, dictionary2 will take priority.\\n\\n```lua\\nlocal Dictionary = {\\n\\tA = 1,\\n\\tB = 2,\\n}\\nlocal SecondDictionary = {\\n\\tC = 3,\\n\\tD = 4,\\n}\\n\\nprint(TableKit.MergeDictionary(Dictionary, SecondDictionary)) -- prints { [\\"A\\"] = 1, [\\"B\\"] = 2, [\\"C\\"] = 3, [\\"D\\"] = 4 }\\n```\\n\\n:::caution Potential overwrite\\nKeys are overwritten when using .MergeDictionary()","params":[{"name":"dictionary1","desc":"","lua_type":"table"},{"name":"dictionary2","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":72,"path":"src/init.luau"}},{"name":"Keys","desc":"This function returns a table with the keys of the passed dictionary.\\n\\n```lua\\nlocal Dictionary = {\\n\\tA = 1,\\n\\tB = 2,\\n\\tC = 3,\\n}\\n\\nprint(TableKit.Keys(Dictionary)) -- prints {\\"A\\", \\"B\\", \\"C\\"}\\n```","params":[{"name":"dictionary","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":99,"path":"src/init.luau"}},{"name":"Values","desc":"This function returns a table with the values of the passed dictionary.\\n\\n```lua\\nlocal Dictionary = {\\n\\tA = 1,\\n\\tB = 2,\\n\\tC = 3,\\n}\\n\\nprint(TableKit.Values(Dictionary)) -- prints {1, 2, 3}\\n```","params":[{"name":"dictionary","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":126,"path":"src/init.luau"}},{"name":"MergeArray","desc":"Merges two arrays. array2 will be added to array1- this means that the indexes of array1 will be the same.\\n\\n```lua\\nlocal FirstArray = {\\"A\\", \\"B\\", \\"C\\", \\"D\\"}\\nlocal SecondArray = {\\"E\\", \\"F\\", \\"G\\", \\"H\\"}\\n\\nprint(TableKit.MergeArray(FirstArray, SecondArray)) -- prints {\\"A\\", \\"B\\", \\"C\\", D\\", \\"E\\", \\"F\\", \\"G\\", \\"H\\"}\\n```","params":[{"name":"array1","desc":"","lua_type":"table"},{"name":"array2","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":151,"path":"src/init.luau"}},{"name":"Reconcile","desc":"Deep-reconciles a dictionary into another dictionary.\\n\\n```lua\\nlocal template = {\\n\\tA = 0,\\n\\tB = 0,\\n\\tC = {\\n\\t\\tD = \\"\\",\\n\\t},\\n}\\n\\nlocal toReconcile = {\\n\\tA = 9,\\n\\tB = 8,\\n\\tC = {},\\n}\\n\\nprint(TableKit.Reconcile(toReconcile, template)) -- prints { A = 9, B = 8, C = { D = \\"\\" }\\n```","params":[{"name":"original","desc":"","lua_type":"table"},{"name":"reconcile","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":187,"path":"src/init.luau"}},{"name":"IsArray","desc":"Detects if a table is an array, meaning purely number indexes.\\n\\n```lua\\nlocal Array = {\\"A\\", \\"B\\", \\"C\\", \\"D\\"}\\nlocal Dictionary = { NotAnArray = true }\\n\\nprint(TableKit.IsArray(Array), TableKit.IsArray(Dictionary)) -- prints true, false\\n```","params":[{"name":"mysteryTable","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":223,"path":"src/init.luau"}},{"name":"IsDictionary","desc":"Detects if a table is a dictionary, meaning it is not purely number indexes.\\n\\n```lua\\nlocal Array = {\\"A\\", \\"B\\", \\"C\\", \\"D\\"}\\nlocal Dictionary = { NotAnArray = true }\\n\\nprint(TableKit.IsDictionary(Array), TableKit.IsDictionary(Dictionary)) -- prints false, true\\n```","params":[{"name":"mysteryTable","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":245,"path":"src/init.luau"}},{"name":"ToString","desc":"Converts a table into a string.\\n\\n```lua\\nlocal DictionaryA = {\\n\\tA = \\"Z\\",\\n\\tB = \\"X\\",\\n\\tC = \\"Y\\",\\n}\\n\\nprint(TableKit.ToString(DictionaryA)) -- prints {\\n\\t\\t\\t\\t\\t\\t--\\t\\t\\t[A]: Z\\n\\t\\t\\t\\t\\t\\t--\\t\\t\\t[C]: Y\\n\\t\\t\\t\\t\\t\\t--\\t\\t\\t[B]: X\\n\\t\\t\\t\\t\\t\\t--\\t\\t }\\n```","params":[{"name":"obj","desc":"","lua_type":"{}"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"static","source":{"line":270,"path":"src/init.luau"}},{"name":"From","desc":"Takes in a data type, and returns it in array form.\\n\\n```lua\\nlocal str = \\"Test\\"\\n\\nprint(TableKit.From(str)) -- prints (\\"T\\", \\"e\\", \\"s\\", t\\")\\n```","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"{ [number]: any }"}],"function_type":"static","source":{"line":295,"path":"src/init.luau"}},{"name":"Filter","desc":"Creates a shallow copy of an array, passed through a filter callback- if the callback returns false, the element is removed.\\n\\n```lua\\nlocal str = \\"Test\\"\\n\\nprint(TableKit.From(str)) -- prints (\\"T\\", \\"e\\", \\"s\\", t\\")\\n```","params":[{"name":"arr","desc":"","lua_type":"{ [number]: any }"},{"name":"callback","desc":"","lua_type":"(value: value) -> boolean"}],"returns":[{"desc":"","lua_type":"{ [number]: any }"}],"function_type":"static","source":{"line":333,"path":"src/init.luau"}},{"name":"Some","desc":"Loops through every single element, and puts it through a callback. If the callback returns true, the function returns true.\\n\\n```lua\\nlocal array = {1, 2, 3, 4, 5}\\nlocal even = function(value) return value % 2 == 0 end\\n\\nprint(TableKit.Some(array, even)) -- Prints true\\n```","params":[{"name":"arr","desc":"","lua_type":"{}"},{"name":"callback","desc":"","lua_type":"(value) -> boolean"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":360,"path":"src/init.luau"}},{"name":"IsFlat","desc":"Detects if a table has an embedded table as one of its members.\\n\\n```lua\\nlocal Shallow = {\\"a\\", \\"b\\"}\\nlocal Deep = {\\"a\\", {\\"b\\"}}\\n\\nprint(TableKit.IsFlat(Shallow)) -- prints true\\nprint(TableKit.IsFlat(Deep)) -- prints true\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":384,"path":"src/init.luau"}},{"name":"Every","desc":"Loops through every single element, and puts it through a callback. If any of the conditions return false, the function returns false.\\n\\n```lua\\nlocal array = {1, 2, 3, 4, 5}\\nlocal even = function(value) return value % 2 == 0 end\\nlocal odd = function(value) return value % 2 ~= 0 end\\n\\nprint(TableKit.Every(array, even)) -- Prints false\\nprint(TableKit.Every(array, odd)) -- Prints false\\n```","params":[{"name":"array","desc":"","lua_type":"{}"},{"name":"callback","desc":"","lua_type":"(value) -> boolean"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":410,"path":"src/init.luau"}},{"name":"HasKey","desc":"Detects if a dictionary has a certain key.\\n\\n```lua\\nlocal Dictionary = {\\n\\tHay = \\"A\\",\\n\\tMoreHay = \\"B\\",\\n\\tNeedle = \\"C\\",\\n\\tSomeHay = \\"D\\",\\n}\\n\\nprint(TableKit.HasKey(Dictionary, \\"Needle\\")) -- prints true\\n```","params":[{"name":"dictionary","desc":"","lua_type":"table"},{"name":"key","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":438,"path":"src/init.luau"}},{"name":"HasValue","desc":"Detects if a dictionary has a certain value.\\n\\n```lua\\nlocal Array = { \\"Has\\", \\"this\\", \\"thing\\" }\\n\\nprint(TableKit.HasValue(Array, \\"Has\\")) -- prints true\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":461,"path":"src/init.luau"}},{"name":"IsEmpty","desc":"Detects if a table is empty.\\n\\n```lua\\nlocal Empty = {}\\nlocal NotEmpty = { \\"Stuff\\" }\\n\\nprint(TableKit.IsEmpty(Empty), TableKit.IsEmpty(NotEmpty)) -- prints true, false\\n```","params":[{"name":"mysteryTable","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":484,"path":"src/init.luau"}}],"properties":[],"types":[],"name":"TableKit","desc":"The container for everything inside of TableKit.","source":{"line":6,"path":"src/init.luau"}}')}}]);
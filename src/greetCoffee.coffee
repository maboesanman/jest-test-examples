module.exports = (name) ->
  if typeof(name) != 'string'
    throw new Error(
      'name needs to be a string'
    )

  if name == ''
    return 'Hello!'
  
  'Hello, ' + name

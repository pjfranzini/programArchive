class GeneticAlgorithm
  constructor: () ->
  generate: (length) ->
    (Math.floor(Math.random() * 2) for num in [1..length]).join("").toString()
  select: (population, fitnesses) ->

    # TODO: Implement the select method
  mutate: (chromosome, p) ->
    # TODO: Implement the mutate method
  crossover: (chromosome1, chromosome2) ->
    # TODO: Implement the crossover method
  run: (fitness, length, p_c, p_m, iterations) ->
    # TODO: Implement the run method
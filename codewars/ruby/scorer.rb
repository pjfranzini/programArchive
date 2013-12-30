class User
  attr_accessor :rank
  attr_accessor :progress
  @@allowed_ranks = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8]
  def initialize
    @index = 0
    @rank = -8
    @progress = 0
  end
  def inc_progress(p)
    ip = @@allowed_ranks.index(p)
    raise ArgumentError unless ip
    @progress+= 3 if ip == @index
    @progress+= 1 if ip == @index-1
    @progress+= 10 * (ip-@index)**2 if ip > @index
    if @progress >= 100
      @index += @progress/100
      @progress = @progress%100
    end
    test = @@allowed_ranks[@index]
    if test
      @rank = test
    elsif index >= @@allowed_ranks.length
      @rank = 8
    end
    @progress = 0 if @rank == 8
  end
end
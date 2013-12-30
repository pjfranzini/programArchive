def runoff(voters)
  # assume structure voters = [ [:a, :b, :c], [:b,:d], [:e,:f]]
  candidates = voters.flatten.uniq
  top_votes = voters.map {|x| x[0]}
  vote_count = candidates.map {|x| [x , top_votes.count(x)]}.sort_by{|k,v| v}
  vote_countr = vote_count.reverse
  total_votes = voters.length
  vote_countr.each { |v| return v[0] if v[1] > total_votes/2}
  low_vote = vote_count[0][1]
  reject_candidates = vote_count.map {|x| x[0] if x[1] == low_vote}.compact!
  voters.each {|v| v.reject! {|vv| reject_candidates.include?(vv)}}
  runoff(voters)
end

puts runoff([ [:a, :b], [:b,:a], [:a,:b]])
puts runoff([ [:a, :b], [:c,:a], [:b,:c], [:a,:b]])
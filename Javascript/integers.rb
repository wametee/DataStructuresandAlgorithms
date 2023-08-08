def A(b)
    a = b.select { |x| x > 0 }.uniq
    
    smallest_positive = 1
    while a.include?(smallest_positive)
      smallest_positive += 1
    end
    
    puts smallest_positive
end


A([1,3,6,5,4,1,2])

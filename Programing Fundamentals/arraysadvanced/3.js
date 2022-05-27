
  
    function twoCriteriaSort(cur, next) {
      if (cur.length === next.length) {
        return cur.localeCompare(next);
      }
      return cur.length - next.length;
    }
  
(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
twoCriteriaSort()
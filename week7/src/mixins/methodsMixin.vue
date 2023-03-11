<script>
export default {
  methods: {
    dateConverter(timeStamp, format = 'part'){
      let date = new Date(timeStamp * 1000);
      const dataValues = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];
      
      const [y, m, d, hr, min, sec] = dataValues

      return format === 'whole' ?
                        `${y}/${m}/${d} ${hr}:${min}:${sec}` :
                        `${y}/${m}/${d}`
    }
  }
}


</script>
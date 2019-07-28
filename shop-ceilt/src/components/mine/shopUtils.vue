<template>
    <div class="shop">
         <div class="b1">
             <div class="cite">我的订单</div>
             <div class="span">
                <a  href="/order/list" class="" >全部订单</a>
             </div>
         </div>
        <yd-grids-group :row="1">
           <yd-grids-item class="item">
               <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMUQ5NDYxMThGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMUQ5NDYxMjhGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxRDk0NjBGOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYxRDk0NjEwOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0LK+9gAAAXNJREFUeNrsnLEOgjAURcUYd/k/Rhh1My7+gJsrYeP7xNHEpXZoIjYIpQnwaM9N3qBLw8nr7ePWmCilNui/tiAAEIAABCAAAQhAkWrX/lCWZXQAiqIY3UF7XXddD10qwGrM8+1Hd5DRTdcx4KY5mOd76br4eFAWye7KfU06jQRQ6rvFbCUBQRkdXXDMAwhAAAIQgAAEIAAh70k6aNkRjx1/SOugqaOWrleP3vhDWgctEbX0xh/SOmjJqCVfg0mn0taWbtJTRy2D8QfHPIAABKCBeWnUNU4sk7Q9Lzlf48TSQZnrHIMH4UGdqju+q/Cgr85miMxawK4A+uqt62SKLYYHAWi9ku5Big76VSNtbWmA6gXXrtawxdrzzWGmNZ99c5Q0QFPPN7anDSaW0d+L+fwMGAEIQAACEIAABCAAIadJWtFBDq/9AarxBVRHAqjy3WJLRA5zqjfecAE025XKGpTw9zgc8wACEIAABCAAAQh16SPAAD22hrFVOZLnAAAAAElFTkSuQmCC">
               <span slot="text">预付款</span>
           </yd-grids-item>
           <yd-grids-item class="item">
               <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMUQ5NDYxNThGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMUQ5NDYxNjhGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxRDk0NjEzOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYxRDk0NjE0OEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4cr/ZAAAA0JJREFUeNrsnD1oFEEUx+e8GLGQxFOw0MbCryhGEGyFoKIoCFqKoqKniGjSSBSuVRTRRBTMcYUQLBUbbSJpUlkIBpOIprG00IsEJOJH1v9jH7JZ5vb29nb25nbfgx9cZnbv7f13Pt68nU3OcRwlVtuWiQQiUFPWUS6XE3VYLBalBUkXE4HE/o9BSTtMesxrdmyUFtTiLtYJhsE34FhGla+ts5Vd7A64YmnjWM3XtgAGW9WCTrZBLzrfyi5WaAOBCjbNYjlLRAm9QpdZTAQSgUSgtAq0VgSqbUfBlAikj05HwQuwTlbzS+0gqID1MgYttVVgBLxKmzhxCLQXTIKiJkqezLJAy8FtMA42+ur+gJtgT1bHoC3gKditqZsBZ8GbrHaxc+CtRpxFcJfLUyNOIy1oDaBk8jFN3WdwCkxkNZLuA+9qiPME9KZVnHoCUa52CIyBDb66ryzYGTCf5rVYUBejfPJVTTnNXCfAl6wvVk9rpu8S2J8Vceq1oC7NWDShMmaNTPOZE8dkukMEEoHEGl6LOdKCzFpVBAq2Stq7WFSbU26eupR2gXIqg9ah23pm6zY5meZFIBFIBBKBmrMecA98AD+ZGS7raSMfsQtE6dmH4D0YAFvBCmYbl1HdY7DSYh9GAkW68JdgX4ibcQFsAofAL8t8GGtB90NcuNf6uDvY5sOIQNv5jnltFhxXbsq2iz/P+o65yOfa4sOYQPSkNe/5+5Nyn8k/V+7joHn+TGUfPcfl+VxbfMQikO59h37fMdfBd825VHbDV9avwr1TYcJHLAJFyd+8Dqgbi2liidtHNapAozGHFElkJKP4qEQV6Bp4wPmcsBY00xyISYS4fMzx7ytFFYhiCHr0XOBckI4h3zm0capb813dXOe14YDvTcJHgX9fYKyUi/qfFzhntEO5Oz/yvil40DMe0KPqW2Cz55i/YBeYCnpNPAkfpiNp2gtNGzgvecooin1W57wRFX4fdRI+jEbSA3VmFr+N8zm2+TAmEPXhw+CRcrfi1bJFvqtHIqyRkvBhdDVPF3MZ7OSBkSLa3+AHmOayXg7/Fyz2YWQ177VpTeSr2tBH87NYVkxSriKQCCQCiUAikAiUWvsnwABTSwDIZ7YMEAAAAABJRU5ErkJggg==">
               <span slot="text">待收货</span>
           </yd-grids-item>
           <yd-grids-item class="item">
               <img slot="icon" src="https://m.mi.com/static/img/i-setting.fb9625b3f2.png">
               <span slot="text">已完成</span>
           </yd-grids-item>
           <yd-grids-item class="item">
               <img slot="icon" src="http://img4.imgtn.bdimg.com/it/u=1914080814,439983592&fm=26&gp=0.jpg">
               <span slot="text">待评价</span>
           </yd-grids-item>
      </yd-grids-group>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
 .b1{
    background-color: #fff;
    height: .88rem;
    border-bottom: 1px solid rgba(0,0,0,.15);
    color: rgba(0,0,0,.54);
    position: relative;
    padding-right: .56rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::after{
        content: "";
        position: absolute;
        right: .32rem;
        top: 50%;
        width: .2rem;
        height: .2rem;
        border-left: 1px solid currentColor;
        border-top: 1px solid currentColor;
        transform: translate3d(0,-50%,0) rotate(135deg);
    }
    .cite{
        font-size: .28rem;
        padding: 0 0 0 .32rem;
        color: rgba(0,0,0,.87);
    }
    .span{
       font-size: .24rem;
       color: rgba(0,0,0,.87);
       display: flex;
       align-items: center;
    }
 }
</style>

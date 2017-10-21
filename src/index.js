import './index.css'
import $ from 'jquery'

var $box = $('ul')

$('.btn-init').on('click',function(){
  $box.addClass('flex-init')
  $(this).css('display','none')
})

$('.flex-jc').on('click','span',function(e){
  var val = 'flex-jc-'+$(this).html()
  var oval = 'flex-jc-'+$('.flex-jc > .active').html()
  $box.removeClass(oval)
  $(this).removeClass('active')
  if(val !== oval){
    $(this).addClass('active').siblings().removeClass('active')
    $box.addClass(val)
  }
})

$('.flex-ai').on('click','span',function(e){
  var val = 'flex-ai-'+$(this).html()
  var oval = 'flex-ai-'+$('.flex-ai > .active').html()
  $box.removeClass(oval)
  $(this).removeClass('active')
  if(val !== oval){
    $(this).addClass('active').siblings().removeClass('active')
    $box.addClass(val)
  }
})
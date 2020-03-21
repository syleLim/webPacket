<h1>
dispatch
</h1>

## FLUX structure
<hr>
### Action -> Dispatch -> Store -> View
<hr>
### Action
 - 기능의 실행
 - 오직 명령만을 수행함
### Dispacher
 - 명령의 전달
### Store
 - app의 데이터를 기록함
 - Store의 상태가 변경될 때 view에서 화면 전환이 일어남
### View
 -  화면 출력 담당 (리엑트가 사용되는 위치)
 
<hr>
<hr>  
## Caution
 - disaptcher는 action에서 넘겨받는 데이터를 store로 전달하는 역할을 한다.
 - store에선 react에서 설정한 작업을 callback 으로 받아서 실행시킨다.(react의 state를 변경하는 작업)
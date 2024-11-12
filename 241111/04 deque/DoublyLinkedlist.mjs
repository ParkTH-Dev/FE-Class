// Node 클래스는 각 데이터를 저장하고, 다음(next)과 이전(prev) 노드를 가리키는 역할을 합니다.
class Node {
  constructor(data, next = null, prev = null) {
    // prev 추가
    this.data = data; // 노드의 데이터
    this.next = next; // 다음 노드를 가리키는 포인터
    this.prev = prev; // 이전 노드를 가리키는 포인터 (이중 연결 리스트에서 필요)
  }
}

// DoublyLinkedList 클래스는 전체 이중 연결 리스트를 관리하는 클래스입니다.
class DoublyLinkedList {
  constructor() {
    this.head = null; // 리스트의 첫 번째 노드를 가리킴
    this.tail = null; // 리스트의 마지막 노드를 가리킴
    this.count = 0; // 리스트의 노드 개수를 추적
  }

  // 리스트의 모든 데이터를 출력하는 메서드
  printAll() {
    let currentNode = this.head; // head부터 시작해서 리스트를 순회
    let text = "["; // 출력 형식으로 리스트 표시를 위한 시작 괄호

    while (currentNode !== null) {
      // 리스트의 끝까지 순회
      text += currentNode.data; // 현재 노드의 데이터를 추가
      console.log(currentNode.data); // 각 데이터를 콘솔에 출력
      currentNode = currentNode.next; // 다음 노드로 이동

      if (currentNode !== null) {
        // 마지막 노드가 아닌 경우 콤마 추가
        text += ", ";
      }
    }

    text += "]"; // 출력 형식으로 리스트 표시를 위한 닫는 괄호
    console.log(text); // 전체 리스트 출력
  }

  // 리스트를 초기화하여 모든 노드를 제거하는 메서드
  clear() {
    this.head = null; // 첫 번째 노드 제거
    this.tail = null; // tail도 초기화하여 리스트를 완전히 비움
    this.count = 0; // 노드 개수 초기화
  }

  // 특정 위치(index)에 데이터를 삽입하는 메서드
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      // 유효하지 않은 위치일 때 에러 처리
      throw new Error("범위를 넘어갔습니다!");
    }

    let newNode = new Node(data); // 새 노드 생성

    if (index === 0) {
      // 첫 번째 위치에 삽입
      newNode.next = this.head; // 새 노드의 next를 현재 head로 지정
      if (this.head !== null) {
        this.head.prev = newNode; // 기존 첫 노드의 prev를 새 노드로 지정
      }
      this.head = newNode; // 새 노드를 새로운 head로 설정
      if (this.count === 0) {
        this.tail = newNode; // 리스트가 비어있다면 tail도 새 노드로 설정
      }
    } else if (index === this.count) {
      // 마지막 위치에 삽입
      newNode.prev = this.tail; // 새 노드의 prev를 현재 tail로 지정
      if (this.tail) {
        this.tail.next = newNode; // 현재 tail의 next를 새 노드로 지정
      }
      this.tail = newNode; // 새 노드를 새로운 tail로 설정
    } else {
      // 중간에 삽입
      let currentNode = this.head; // head부터 시작하여 삽입 위치로 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next; // 새 노드의 next를 현재 노드의 next로 지정
      newNode.prev = currentNode; // 새 노드의 prev를 현재 노드로 지정
      currentNode.next.prev = newNode; // 기존 다음 노드의 prev를 새 노드로 지정
      currentNode.next = newNode; // 현재 노드의 next를 새 노드로 연결
    }
    this.count++; // 노드 개수 증가
  }

  // 리스트의 끝에 데이터를 삽입하는 메서드
  insertLast(data) {
    this.insertAt(this.count, data); // 마지막 위치에 삽입
  }

  // 특정 위치(index)의 노드를 삭제하는 메서드
  deleteAt(index) {
    if (index >= this.count || index < 0) {
      // 유효하지 않은 위치일 때 에러 처리
      throw new Error("제거할 수 없습니다!");
    }

    if (index === 0) {
      // 첫 번째 노드 삭제
      let deletedNode = this.head; // 삭제할 노드를 저장
      if (this.head.next === null) {
        // 노드가 하나뿐인 경우
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next; // head를 다음 노드로 이동
        this.head.prev = null; // 새 head의 이전 노드를 null로 설정
      }
      this.count--; // 노드 개수 감소
      return deletedNode; // 삭제된 노드 반환
    } else if (index === this.count - 1) {
      // 마지막 노드 삭제
      let deletedNode = this.tail;
      this.tail = this.tail.prev; // tail을 이전 노드로 변경
      if (this.tail) {
        this.tail.next = null; // 새로운 tail의 next를 null로 설정
      }
      this.count--;
      return deletedNode;
    } else {
      // 중간에 있는 노드 삭제
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        // 삭제할 노드 직전까지 이동
        currentNode = currentNode.next;
      }
      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next; // 현재 노드의 next를 다음 다음 노드로 지정
      if (currentNode.next) {
        currentNode.next.prev = currentNode; // 다음 노드가 존재하면, 그 노드의 prev를 현재 노드로 설정
      }
      this.count--;
      return deletedNode;
    }
  }

  // 리스트의 마지막 노드를 삭제하는 메서드
  deleteLast() {
    return this.deleteAt(this.count - 1); // 마지막 위치의 노드 삭제
  }

  // 특정 위치(index)의 노드를 반환하는 메서드
  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      // 유효하지 않은 위치일 때 에러 처리
      throw new Error("범위를 넘어갔습니다.");
    }
    let currentNode = this.head; // head부터 시작
    for (let i = 0; i < index; i++) {
      // 해당 위치까지 이동
      currentNode = currentNode.next;
    }
    return currentNode; // 해당 위치의 노드 반환
  }
}

// Node와 DoublyLinkedList 클래스를 외부에서 사용할 수 있도록 내보냄
export { Node, DoublyLinkedList };

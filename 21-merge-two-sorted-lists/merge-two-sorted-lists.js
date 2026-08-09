/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let headNode = null;
    let lastNode = null;
    let l1 = list1
    let l2 = list2

    while (l1 && l2) {
        let nextNode = l1
        if (l1.val <= l2.val) {
            nextNode = l1
            l1 = l1.next
        } else {
            nextNode = l2
            l2 = l2.next
        }


        if (headNode === null) {
            headNode = nextNode
            lastNode = nextNode
        } else {
            lastNode.next = nextNode
            lastNode = lastNode.next
        }
    }


    while (l1) {
        if (headNode === null) {
            headNode = l1
            lastNode = l1
        } else {
            lastNode.next = l1
            lastNode = lastNode.next
        }
        l1 = l1.next
    }


    while (l2) {
        if (headNode === null) {
            headNode = l2
            lastNode = l2
        } else {
            lastNode.next = l2
            lastNode = lastNode.next
        }
        l2 = l2.next
    }

    return headNode;
};
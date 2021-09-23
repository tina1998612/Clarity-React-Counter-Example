;; Multiplayer Counter contract

(define-map counters principal uint)
(define-data-var top-counter principal tx-sender)
(define-data-var top-count uint u0)

(define-read-only (get-count (who principal))
	(default-to u0 (map-get? counters who))
)

;; store who has the highest count
(define-read-only (get-top-counter)
	{
		who: (var-get top-counter),
		count: (var-get top-count)
	}
)

(define-public (count-up)
	(let
		(
			(new-count (+ (get-count tx-sender) u1))
		)
		(map-set counters tx-sender new-count)
		(and (> new-count (var-get top-count)) ;; if new-count > top-count
			(var-set top-count new-count)
			(var-set top-counter tx-sender)
		)
		(ok true)
	)
)


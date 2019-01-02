package cn.springcloud.admin.client.service;

import cn.springcloud.admin.client.model.OrderModel;

/**
 * 
 * @author xujin
 *
 */
public interface OrderService {
	public OrderModel findOrderByOrderId(Long orderId);
}

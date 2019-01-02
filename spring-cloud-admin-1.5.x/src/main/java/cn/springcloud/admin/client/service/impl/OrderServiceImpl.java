package cn.springcloud.admin.client.service.impl;

import java.util.Date;

import cn.springcloud.admin.client.service.OrderService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import cn.springcloud.admin.client.entity.Order;
import cn.springcloud.admin.client.model.OrderModel;

@Service
public class OrderServiceImpl implements OrderService {
	public OrderModel findOrderByOrderId(Long orderId) {
		OrderModel orderModel = new OrderModel();
		if (orderId.equals(2L)) {
			Order order = new Order();
			order.setCreateTime(new Date());
			order.setOrderNo(2L);
			BeanUtils.copyProperties(order, orderModel);
		}
		return orderModel;
	}

}

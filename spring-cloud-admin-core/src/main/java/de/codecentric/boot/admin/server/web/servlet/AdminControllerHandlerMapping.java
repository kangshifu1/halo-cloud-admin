package de.codecentric.boot.admin.server.web.servlet;

import de.codecentric.boot.admin.server.web.AdminController;
import de.codecentric.boot.admin.server.web.PathUtils;

import java.lang.reflect.Method;
import java.util.Set;
import org.springframework.core.annotation.AnnotatedElementUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.mvc.condition.PatternsRequestCondition;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

public class AdminControllerHandlerMapping extends RequestMappingHandlerMapping {
    private final String adminContextPath;

    public AdminControllerHandlerMapping(String adminContextPath) {
        this.adminContextPath = adminContextPath;
    }

    @Override
    protected boolean isHandler(Class<?> beanType) {
        return AnnotatedElementUtils.hasAnnotation(beanType, AdminController.class);
    }

    @Override
    protected void registerHandlerMethod(Object handler, Method method, RequestMappingInfo mapping) {
        super.registerHandlerMethod(handler, method, withPrefix(mapping));
    }

    private RequestMappingInfo withPrefix(RequestMappingInfo mapping) {
        if (!StringUtils.hasText(adminContextPath)) {
            return mapping;
        }
        PatternsRequestCondition patternsCondition = new PatternsRequestCondition(
            withNewPatterns(mapping.getPatternsCondition().getPatterns()));
        return new RequestMappingInfo(patternsCondition, mapping.getMethodsCondition(), mapping.getParamsCondition(),
            mapping.getHeadersCondition(), mapping.getConsumesCondition(), mapping.getProducesCondition(),
            mapping.getCustomCondition());
    }

    private String[] withNewPatterns(Set<String> patterns) {
        return patterns.stream()
                       .map(pattern -> PathUtils.normalizePath(adminContextPath + pattern))
                       .toArray(String[]::new);
    }

}
